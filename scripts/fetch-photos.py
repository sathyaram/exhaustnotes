#!/usr/bin/env python3
"""Fetch Creative Commons car photos from Wikimedia Commons.

Writes images to public/photos/<car-id>/N.jpg and regenerates lib/photos.ts
with the photographer and licence for each one. Safe to re-run: files already
on disk are skipped, and search metadata is cached in .cache/commons-meta.json.

    python3 scripts/fetch-photos.py

Commons rate-limits aggressively, so downloads are paced and retried with
exponential backoff. A full cold run takes a few minutes.
"""

import html, json, os, re, time, urllib.error, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "photos")
CACHE = os.path.join(ROOT, ".cache")
META = os.path.join(CACHE, "commons-meta.json")
TS_OUT = os.path.join(ROOT, "lib", "photos.ts")
API = "https://commons.wikimedia.org/w/api.php"
UA = "ExhaustNotes/1.0 (portfolio project; sathyatheram@gmail.com)"

MAX_PER_CAR = 3

QUERIES = {
"shelbygt350": ("Ford Mustang Shelby GT350", ["gt350"]),
 "audittrs":    ("Audi TT RS 8S", ["tt"]),
 "panamaraturbo": ("Porsche Panamera 970", ["panamera"]),
 "toyota86":    ("Toyota 86 GT86", ["86"]),
 "m4":          ("BMW M4 F82", ["m4"]),
 "camarozl1":   ("Chevrolet Camaro ZL1", ["zl1", "camaro"]),
 "huracan":     ("Lamborghini Huracan", ["huracan", "huracán"]),
 "golfgti":     ("Volkswagen Golf GTI Mk7", ["gti"]),
 "nissangtr":   ("Nissan GT-R R35", ["gt-r"]),
 "lc500":       ("Lexus LC 500", ["lc"]),
 "corvette":    ("Chevrolet Corvette C7 Stingray", ["corvette"]),
 "hellcat":     ("Dodge Challenger SRT Hellcat", ["challenger"]),
 "e63":         ("Mercedes-Benz E63 AMG W213", ["e63", "e 63"]),
 "fordgt":      ("Ford GT 2017 second generation", ["ford gt"]),
 "stinger":     ("Kia Stinger GT", ["stinger"]),
 "720s":        ("McLaren 720S", ["720s"]),
 "audir8":      ("Audi R8 V10", ["r8"]),
 "maseratigt":  ("Maserati GranTurismo", ["granturismo"]),
 "velostern":   ("Hyundai Veloster N", ["veloster"]),
 "giulia":      ("Alfa Romeo Giulia Quadrifoglio", ["giulia"]),
 "ferrari458":  ("Ferrari 458 Italia", ["458"]),
 "ctsv":        ("Cadillac CTS-V", ["cts"]),
 "lexuslfa":    ("Lexus LFA", ["lfa"]),
 "ftype":       ("Jaguar F-Type R coupe", ["f-type", "ftype"]),
 "continentalgt": ("Bentley Continental GT", ["continental"]),
 "amggtr":      ("Mercedes-AMG GT R", ["amg gt", "amg-gt"]),
 "vantage2010": ("Aston Martin V8 Vantage", ["vantage"]),
 "viper":       ("Dodge Viper ACR SRT", ["viper"]),
 "911gt2rs":    ("Porsche 911 GT2 RS 991", ["gt2"]),
 "focusrs":     ("Ford Focus RS Mk3", ["focus"]),
}

OK_LICENSE = re.compile(r"cc0|cc by|public domain|pd-", re.I)
BAD_TITLE = re.compile(
    r"\b(interior|engine|badge|logo|wheel|dashboard|seat|emblem|detail|headlight"
    r"|taillight|rear light|steering|gauge|diagram)\b"
    # Wrong car, not just a bad crop.
    r"|concept|replica|prototype"
    # "interior" in the languages Commons titles actually use.
    r"|wn%C4%99trze|wn\u0119trze|interieur|interni|innenraum|int%C3%A9rieur",
    re.I,
)


def get(url, tries=5):
    """GET with backoff. Commons answers 429 freely; that is not fatal."""
    delay = 2.0
    for attempt in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            return urllib.request.urlopen(req, timeout=60).read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503) and attempt < tries - 1:
                time.sleep(delay)
                delay *= 2
                continue
            raise
        except Exception:
            if attempt < tries - 1:
                time.sleep(delay)
                delay *= 2
                continue
            raise


def strip_html(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()


def credit_url(artist_html, page):
    m = re.search(r'href="([^"]+)"', artist_html or "")
    if not m:
        return page
    u = m.group(1)
    return ("https:" + u) if u.startswith("//") else u


def search_car(cid, query, tokens):
    params = urllib.parse.urlencode({
        "action": "query", "generator": "search",
        "gsrsearch": f"{query} filetype:bitmap", "gsrnamespace": 6,
        "gsrlimit": 30, "prop": "imageinfo",
        "iiprop": "url|extmetadata|size", "iiurlwidth": 1400, "format": "json",
    })
    pages = json.loads(get(f"{API}?{params}")).get("query", {}).get("pages", {})
    picked = []
    # The generator returns pages unordered; `index` restores relevance rank.
    for pg in sorted(pages.values(), key=lambda x: x.get("index", 999)):
        if len(picked) >= MAX_PER_CAR:
            break
        title = pg["title"]
        if not any(t in title.lower() for t in tokens):
            continue
        if BAD_TITLE.search(title):
            continue
        ii = pg.get("imageinfo", [{}])[0]
        em = ii.get("extmetadata", {})
        lic = strip_html(em.get("LicenseShortName", {}).get("value", ""))
        if not OK_LICENSE.search(lic) or ii.get("width", 0) < 900:
            continue
        if not ii.get("thumburl"):
            continue
        artist = em.get("Artist", {}).get("value", "")
        picked.append({
            "thumb": ii["thumburl"],
            "author": strip_html(artist)[:60] or "Wikimedia Commons",
            "authorUrl": credit_url(artist, ii.get("descriptionurl", "")),
            "license": lic,
            "page": ii.get("descriptionurl", ""),
        })
    return picked


def main():
    os.makedirs(CACHE, exist_ok=True)
    os.makedirs(OUT, exist_ok=True)

    if os.path.exists(META):
        meta = json.load(open(META))
        print(f"using cached metadata for {len(meta)} cars ({META})")
    else:
        meta = {}
        for cid, (query, tokens) in QUERIES.items():
            try:
                meta[cid] = search_car(cid, query, tokens)
            except Exception as e:
                print(f"  !! {cid} search failed: {e}")
                meta[cid] = []
            print(f"{cid:16s} found {len(meta[cid])}")
            time.sleep(1.2)
        json.dump(meta, open(META, "w"), indent=1)

    manifest, fetched = {}, 0
    for cid, items in meta.items():
        d = os.path.join(OUT, cid)
        os.makedirs(d, exist_ok=True)
        saved = []
        for i, it in enumerate(items):
            path = os.path.join(d, f"{i + 1}.jpg")
            if not (os.path.exists(path) and os.path.getsize(path) > 20_000):
                try:
                    open(path, "wb").write(get(it["thumb"]))
                    fetched += 1
                    time.sleep(1.4)
                except Exception as e:
                    print(f"  !! {cid} #{i + 1}: {e}")
                    if os.path.exists(path):
                        os.remove(path)
                    continue
            saved.append({
                "src": f"/photos/{cid}/{i + 1}.jpg",
                "credit": it["author"],
                "creditUrl": it["authorUrl"] or it["page"],
                "license": it["license"],
                "source": it["page"],
            })
        manifest[cid] = saved

    ts = (
        "// GENERATED — do not edit by hand. See scripts/fetch-photos.py.\n"
        "// Every entry is a Creative Commons or public-domain image from Wikimedia\n"
        "// Commons, carrying the photographer and licence it was published under.\n\n"
        "export type Photo = {\n  src: string;\n  credit: string;\n"
        "  creditUrl: string;\n  license: string;\n  source: string;\n};\n\n"
        "export const commonsPhotos: Record<string, Photo[]> = "
        + json.dumps(manifest, indent=2, ensure_ascii=False)
        + ";\n"
    )
    open(TS_OUT, "w").write(ts)

    print(f"\ndownloaded this run: {fetched}")
    print(f"total photos: {sum(len(v) for v in manifest.values())}")
    missing = [k for k, v in manifest.items() if not v]
    if missing:
        print(f"cars with no photos: {missing}")
    print("\nNow compress them:")
    print("  find public/photos -name '*.jpg' -print0 | xargs -0 -P4 -I{} \\")
    print("    sips -Z 1200 -s format jpeg -s formatOptions 72 {} --out {}")


if __name__ == "__main__":
    main()
