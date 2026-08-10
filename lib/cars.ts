// Generated from the original ExhaustNotes dataset, enriched with engine specs.
// Credits are carried over verbatim from the 2019 build.

import { commonsPhotos, type Photo } from "./photos";

export type { Photo };

export type Aspiration = 'NA' | 'Turbo' | 'Twin-Turbo' | 'Supercharged';

export type Car = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  engine: {
    layout: string;
    cylinders: number;
    displacement: number;
    aspiration: Aspiration;
  };
  power: number;
  redline: number;
  tags: string[];
  signature: string;
  image: string;
  sound: string;
  link: string;
  imageCredit: { name: string; url: string };
  soundCredit: { name: string; url: string };
};

export const cars: Car[] = [
  {
    "id": "shelbygt350",
    "year": 2018,
    "make": "Ford",
    "model": "Mustang",
    "trim": "Shelby GT350",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 5.2,
      "aspiration": "NA"
    },
    "power": 526,
    "redline": 8250,
    "tags": [
      "flat-plane",
      "wail",
      "american"
    ],
    "signature": "A flat-plane crank in a Mustang — Ferrari's firing order wearing a pony badge. Sounds wrong in the best way.",
    "image": "/images/mustang.jpg",
    "sound": "/sounds/shelbygt350.m4a",
    "link": "https://www.ford.com/performance/gt350/",
    "imageCredit": {
      "name": "@Car&Driver",
      "url": "https://caranddriver.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "audittrs",
    "year": 2016,
    "make": "Audi",
    "model": "TT",
    "trim": "RS",
    "engine": {
      "layout": "I5",
      "cylinders": 5,
      "displacement": 2.5,
      "aspiration": "Turbo"
    },
    "power": 400,
    "redline": 7000,
    "tags": [
      "offbeat",
      "warble",
      "rally"
    ],
    "signature": "Five cylinders means an uneven, loping warble no V-engine can fake. Direct descendant of the Group B Quattro.",
    "image": "/images/audittrs.jpg",
    "sound": "/sounds/audittrs.m4a",
    "link": "https://www.audiusa.com/models/audi-tt-rs",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "panamaraturbo",
    "year": 2016,
    "make": "Porsche",
    "model": "Panamera",
    "trim": "Turbo",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 4.8,
      "aspiration": "Twin-Turbo"
    },
    "power": 520,
    "redline": 6700,
    "tags": [
      "muted",
      "refined",
      "turbo"
    ],
    "signature": "Deliberately buttoned-up. The turbos eat the top end and leave a deep, expensive hum.",
    "image": "/images/panamaraturbo.jpg",
    "sound": "/sounds/panamaraturbo.m4a",
    "link": "https://www.porsche.com/usa/models/panamera/panamera-turbo-models/",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "toyota86",
    "year": 2017,
    "make": "Toyota",
    "model": "86",
    "trim": "GT",
    "engine": {
      "layout": "F4",
      "cylinders": 4,
      "displacement": 2.0,
      "aspiration": "NA"
    },
    "power": 205,
    "redline": 7400,
    "tags": [
      "boxer",
      "thrash",
      "raw"
    ],
    "signature": "A boxer four with nothing to hide behind. Coarse, buzzy, and completely honest about its 205hp.",
    "image": "/images/toyota86.jpg",
    "sound": "/sounds/toyota86.m4a",
    "link": "https://www.toyota.com/86/",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "m4",
    "year": 2018,
    "make": "BMW",
    "model": "M4",
    "trim": "",
    "engine": {
      "layout": "I6",
      "cylinders": 6,
      "displacement": 3.0,
      "aspiration": "Twin-Turbo"
    },
    "power": 425,
    "redline": 7600,
    "tags": [
      "smooth",
      "piped",
      "inline-six"
    ],
    "signature": "Textbook inline-six smoothness, partially piped through the speakers. Purists have opinions.",
    "image": "/images/bmwm4.jpg",
    "sound": "/sounds/m4.m4a",
    "link": "https://www.bmwusa.com/vehicles/4-series/m4/overview.html",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "camarozl1",
    "year": 2017,
    "make": "Chevrolet",
    "model": "Camaro",
    "trim": "ZL1",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 6.2,
      "aspiration": "Supercharged"
    },
    "power": 650,
    "redline": 6400,
    "tags": [
      "supercharged",
      "whine",
      "american"
    ],
    "signature": "Cross-plane V8 rumble with a supercharger whine laid over the top like a second instrument.",
    "image": "/images/camaro.jpg",
    "sound": "/sounds/camarozl1.m4a",
    "link": "https://www.chevrolet.com/performance/camaro-zl1-sports-car",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "huracan",
    "year": 2017,
    "make": "Lamborghini",
    "model": "Huracán",
    "trim": "",
    "engine": {
      "layout": "V10",
      "cylinders": 10,
      "displacement": 5.2,
      "aspiration": "NA"
    },
    "power": 602,
    "redline": 8500,
    "tags": [
      "V10",
      "shriek",
      "exotic"
    ],
    "signature": "Ten cylinders, no turbos, 8,500rpm. The last generation of Lamborghini that screams instead of thumps.",
    "image": "/images/lamhur.jpg",
    "sound": "/sounds/huracan.m4a",
    "link": "https://www.lamborghini.com/en-en/models/huracan",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "golfgti",
    "year": 2016,
    "make": "Volkswagen",
    "model": "Golf",
    "trim": "GTI",
    "engine": {
      "layout": "I4",
      "cylinders": 4,
      "displacement": 2.0,
      "aspiration": "Turbo"
    },
    "power": 210,
    "redline": 6500,
    "tags": [
      "turbo",
      "subtle",
      "hatch"
    ],
    "signature": "Modest and a little synthetic — but the benchmark everyone else's hot hatch gets measured against.",
    "image": "/images/golfgti.jpg",
    "sound": "/sounds/golfgti.m4a",
    "link": "https://www.vw.com/models/golf-gti/section/overview/",
    "imageCredit": {
      "name": "@Car&Driver",
      "url": "https://caranddriver.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "nissangtr",
    "year": 2017,
    "make": "Nissan",
    "model": "GT-R",
    "trim": "",
    "engine": {
      "layout": "V6",
      "cylinders": 6,
      "displacement": 3.8,
      "aspiration": "Twin-Turbo"
    },
    "power": 565,
    "redline": 7000,
    "tags": [
      "turbo",
      "industrial",
      "whoosh"
    ],
    "signature": "More machinery than music. Turbo whoosh, transmission clatter, and a V6 that sounds like it has a job to do.",
    "image": "/images/gtr.jpg",
    "sound": "/sounds/nissangtr.m4a",
    "link": "https://www.nissanusa.com/vehicles/sports-cars/gt-r.html",
    "imageCredit": {
      "name": "@Car&Driver",
      "url": "https://caranddriver.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "lc500",
    "year": 2018,
    "make": "Lexus",
    "model": "LC",
    "trim": "500",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 5.0,
      "aspiration": "NA"
    },
    "power": 471,
    "redline": 7300,
    "tags": [
      "NA-V8",
      "tuned",
      "grand-tourer"
    ],
    "signature": "Lexus tuned this one by ear, with acoustic engineers. A naturally aspirated V8 held onto long after everyone else quit.",
    "image": "/images/lc500.jpg",
    "sound": "/sounds/lc500.m4a",
    "link": "https://www.lexus.com/models/LC",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "corvette",
    "year": 2018,
    "make": "Chevrolet",
    "model": "Corvette",
    "trim": "Stingray",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 6.2,
      "aspiration": "NA"
    },
    "power": 455,
    "redline": 6600,
    "tags": [
      "pushrod",
      "burble",
      "american"
    ],
    "signature": "Pushrod V8, two valves per cylinder, technology from another era — and a burble nothing modern replicates.",
    "image": "/images/corvette.jpg",
    "sound": "/sounds/corvette.m4a",
    "link": "https://www.chevrolet.com/performance/corvette-stingray-sports-car",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "hellcat",
    "year": 2018,
    "make": "Dodge",
    "model": "Challenger",
    "trim": "SRT Hellcat",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 6.2,
      "aspiration": "Supercharged"
    },
    "power": 707,
    "redline": 6200,
    "tags": [
      "supercharged",
      "whine",
      "muscle"
    ],
    "signature": "The supercharger whine is the whole personality. 707hp of deliberately unsubtle theatre.",
    "image": "/images/challenger.jpg",
    "sound": "/sounds/hellcat.m4a",
    "link": "https://www.dodge.com/challenger/srt.html",
    "imageCredit": {
      "name": "@Car&Driver",
      "url": "https://caranddriver.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "e63",
    "year": 2018,
    "make": "Mercedes-AMG",
    "model": "E63",
    "trim": "S",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 4.0,
      "aspiration": "Twin-Turbo"
    },
    "power": 603,
    "redline": 7000,
    "tags": [
      "hot-V",
      "crackle",
      "sedan"
    ],
    "signature": "Hot-V turbos tucked inside the vee. A four-door that overruns and crackles like it's getting away with something.",
    "image": "/images/e63.jpg",
    "sound": "/sounds/e63.m4a",
    "link": "https://www.mbusa.com/en/vehicles/model/e-class/wagon/e63s4s",
    "imageCredit": {
      "name": "@Car&Driver",
      "url": "https://caranddriver.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "fordgt",
    "year": 2017,
    "make": "Ford",
    "model": "GT",
    "trim": "",
    "engine": {
      "layout": "V6",
      "cylinders": 6,
      "displacement": 3.5,
      "aspiration": "Twin-Turbo"
    },
    "power": 647,
    "redline": 7000,
    "tags": [
      "turbo-V6",
      "controversial",
      "race"
    ],
    "signature": "A twin-turbo V6 in a car whose ancestor had a 7-litre V8. It won Le Mans anyway. Listen before you judge.",
    "image": "/images/fordgt.jpg",
    "sound": "/sounds/fordgt.m4a",
    "link": "https://www.ford.com/performance/gt/",
    "imageCredit": {
      "name": "@Car&Driver",
      "url": "https://caranddriver.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "stinger",
    "year": 2018,
    "make": "Kia",
    "model": "Stinger",
    "trim": "GT",
    "engine": {
      "layout": "V6",
      "cylinders": 6,
      "displacement": 3.3,
      "aspiration": "Twin-Turbo"
    },
    "power": 365,
    "redline": 6500,
    "tags": [
      "turbo-V6",
      "surprising",
      "value"
    ],
    "signature": "The one nobody expected on this list. A Kia with a proper twin-turbo six and a genuinely good voice.",
    "image": "/images/stinger.jpg",
    "sound": "/sounds/stinger.m4a",
    "link": "https://www.kia.com/us/en/vehicle/stinger/2018/overview",
    "imageCredit": {
      "name": "@Car&Driver",
      "url": "https://caranddriver.com"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "720s",
    "year": 2018,
    "make": "McLaren",
    "model": "720S",
    "trim": "",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 4.0,
      "aspiration": "Twin-Turbo"
    },
    "power": 710,
    "redline": 8200,
    "tags": [
      "flat-plane",
      "turbo",
      "hollow"
    ],
    "signature": "Flat-plane V8 spinning to 8,200 with turbos muting it. Hollow, mechanical, more spaceship than car.",
    "image": "/images/720s.jpg",
    "sound": "/sounds/720s.m4a",
    "link": "https://cars.mclaren.com/super-series/720s",
    "imageCredit": {
      "name": "Jeff Ludes",
      "url": "https://www.behance.net/gallery/71413633/McLaren-720S?tracking_source=for_you_published"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "audir8",
    "year": 2015,
    "make": "Audi",
    "model": "R8",
    "trim": "V10",
    "engine": {
      "layout": "V10",
      "cylinders": 10,
      "displacement": 5.2,
      "aspiration": "NA"
    },
    "power": 525,
    "redline": 8700,
    "tags": [
      "V10",
      "metallic",
      "clean"
    ],
    "signature": "The Huracán's engine with German manners. Same ten cylinders, less hysteria, cleaner edges.",
    "image": "/images/audir8.jpg",
    "sound": "/sounds/audir8.m4a",
    "link": "https://www.audiusa.com/models/audi-r8",
    "imageCredit": {
      "name": "Motor1",
      "url": "https://www.motor1.com/reviews/287566/2019-audi-r8-first-drive-power-hitter/"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "maseratigt",
    "year": 2013,
    "make": "Maserati",
    "model": "GranTurismo",
    "trim": "",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 4.7,
      "aspiration": "NA"
    },
    "power": 454,
    "redline": 7500,
    "tags": [
      "ferrari-derived",
      "operatic",
      "italian"
    ],
    "signature": "A Ferrari-derived V8 with a cross-plane crank and an exhaust tuned like an instrument. Widely considered the best-sounding GT ever built.",
    "image": "/images/maseratigt.jpg",
    "sound": "/sounds/maseratigt.m4a",
    "link": "https://www.maseratiusa.com/maserati/us/en/models/granturismo",
    "imageCredit": {
      "name": "WhichCar",
      "url": "https://www.whichcar.com.au/reviews/2018-maserati-granturismo-review"
    },
    "soundCredit": {
      "name": "@carlifestyle",
      "url": "https://instagram.com/carlifestyle"
    }
  },
  {
    "id": "velostern",
    "year": 2019,
    "make": "Hyundai",
    "model": "Veloster",
    "trim": "N",
    "engine": {
      "layout": "I4",
      "cylinders": 4,
      "displacement": 2.0,
      "aspiration": "Turbo"
    },
    "power": 275,
    "redline": 6750,
    "tags": [
      "pops",
      "bangs",
      "hot-hatch"
    ],
    "signature": "Hyundai hired the ex-BMW M boss and let him tune the overrun. It pops and bangs like a rally car.",
    "image": "/images/velostern.jpg",
    "sound": "/sounds/velostern.m4a",
    "link": "https://www.hyundaiusa.com/veloster-n",
    "imageCredit": {
      "name": "AutoWeek",
      "url": "https://autoweek.com/article/car-reviews/2019-hyundai-veloster-n-drive-review-whole-heart"
    },
    "soundCredit": {
      "name": "The YSR",
      "url": "https://www.youtube.com/watch?v=ats4PptnmhQ"
    }
  },
  {
    "id": "giulia",
    "year": 2016,
    "make": "Alfa Romeo",
    "model": "Giulia",
    "trim": "Quadrifoglio",
    "engine": {
      "layout": "V6",
      "cylinders": 6,
      "displacement": 2.9,
      "aspiration": "Twin-Turbo"
    },
    "power": 505,
    "redline": 6500,
    "tags": [
      "ferrari-derived",
      "hard-edged",
      "italian"
    ],
    "signature": "Essentially a Ferrari V8 with two cylinders removed. Hard-edged and slightly unhinged for a sedan.",
    "image": "/images/giulia.jpg",
    "sound": "/sounds/giulia.m4a",
    "link": "https://www.alfaromeousa.com/cars/giulia/quadrifoglio",
    "imageCredit": {
      "name": "GearPatrol",
      "url": "https://gearpatrol.com/2018/06/29/2019-alfa-romeo-giulia-stevlio-quadrifoglio/#4"
    },
    "soundCredit": {
      "name": "NM2255",
      "url": "https://www.youtube.com/watch?v=OStBe5ZvKEA"
    }
  },
  {
    "id": "ferrari458",
    "year": 2015,
    "make": "Ferrari",
    "model": "458",
    "trim": "Italia",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 4.5,
      "aspiration": "NA"
    },
    "power": 562,
    "redline": 9000,
    "tags": [
      "flat-plane",
      "9000rpm",
      "benchmark"
    ],
    "signature": "The last naturally aspirated mid-engine Ferrari V8. 9,000rpm. This is the reference recording on this site.",
    "image": "/images/ferrari458.jpg",
    "sound": "/sounds/ferrari458.m4a",
    "link": "https://auto.ferrari.com/en_US/sports-cars-models/past-models/458-speciale/",
    "imageCredit": {
      "name": "Zadart",
      "url": "https://www.zadart.com/our-fleet/ferrari-458-italia/"
    },
    "soundCredit": {
      "name": "AutomannTV",
      "url": "https://www.youtube.com/watch?v=xicgkUI-NcY"
    }
  },
  {
    "id": "ctsv",
    "year": 2016,
    "make": "Cadillac",
    "model": "CTS-V",
    "trim": "",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 6.2,
      "aspiration": "Supercharged"
    },
    "power": 640,
    "redline": 6200,
    "tags": [
      "supercharged",
      "muscle",
      "sleeper"
    ],
    "signature": "Corvette supercharged V8 in a Cadillac suit. Deep, blown, and faintly menacing.",
    "image": "/images/ctsv.jpg",
    "sound": "/sounds/ctsv.m4a",
    "link": "https://www.cadillac.com/v-series/cts-v-sedan",
    "imageCredit": {
      "name": "MotorTrend",
      "url": "https://www.motortrend.com/cars/cadillac/cts-v/2016/"
    },
    "soundCredit": {
      "name": "Matt Moran",
      "url": "https://www.youtube.com/watch?v=ONMAYJED4pw"
    }
  },
  {
    "id": "lexuslfa",
    "year": 2012,
    "make": "Lexus",
    "model": "LFA",
    "trim": "",
    "engine": {
      "layout": "V10",
      "cylinders": 10,
      "displacement": 4.8,
      "aspiration": "NA"
    },
    "power": 553,
    "redline": 9000,
    "tags": [
      "V10",
      "9000rpm",
      "legend"
    ],
    "signature": "Yamaha's musical instrument division voiced this engine. Ten cylinders, 0-9,000rpm in 0.6 seconds, and the most famous sound in modern car culture.",
    "image": "/images/lexuslfa.jpg",
    "sound": "/sounds/lexuslfa.m4a",
    "link": "https://en.wikipedia.org/wiki/Lexus_LFA",
    "imageCredit": {
      "name": "RaY29rus",
      "url": "https://www.flickr.com/photos/ray29rus/39966947195/"
    },
    "soundCredit": {
      "name": "NM2255",
      "url": "https://www.youtube.com/watch?v=d9qYCUjrrYs&t=76s"
    }
  },
  {
    "id": "ftype",
    "year": 2015,
    "make": "Jaguar",
    "model": "F-Type",
    "trim": "R",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 5.0,
      "aspiration": "Supercharged"
    },
    "power": 550,
    "redline": 6500,
    "tags": [
      "supercharged",
      "crackle",
      "british"
    ],
    "signature": "Jaguar aimed the exhaust valves at drama and let it crackle on overrun. Deeply un-British behaviour.",
    "image": "/images/ftype.jpg",
    "sound": "/sounds/ftype.m4a",
    "link": "https://www.jaguarusa.com/all-models/f-type/index.html",
    "imageCredit": {
      "name": "RaY29rus",
      "url": "https://www.flickr.com/photos/ray29rus/29644154958"
    },
    "soundCredit": {
      "name": "Marchettino",
      "url": "https://www.youtube.com/watch?v=I9CYc3M0DVk"
    }
  },
  {
    "id": "continentalgt",
    "year": 2019,
    "make": "Bentley",
    "model": "Continental",
    "trim": "GT W12",
    "engine": {
      "layout": "W12",
      "cylinders": 12,
      "displacement": 6.0,
      "aspiration": "Twin-Turbo"
    },
    "power": 626,
    "redline": 6000,
    "tags": [
      "W12",
      "distant",
      "luxury"
    ],
    "signature": "Twelve cylinders you feel more than hear. Bentley spent the engineering budget on keeping it out of the cabin.",
    "image": "/images/continentalgt.jpg",
    "sound": "/sounds/continentalgt.m4a",
    "link": "https://www.bentleymotors.com/en/models/new-continental/new-continental-gt.html",
    "imageCredit": {
      "name": "Edmunds",
      "url": "https://www.edmunds.com/bentley/continental/2019/"
    },
    "soundCredit": {
      "name": "AutoTopNL",
      "url": "https://www.youtube.com/watch?v=noJgGoyt6vM"
    }
  },
  {
    "id": "amggtr",
    "year": 2017,
    "make": "Mercedes-AMG",
    "model": "GT",
    "trim": "R",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 4.0,
      "aspiration": "Twin-Turbo"
    },
    "power": 577,
    "redline": 7000,
    "tags": [
      "hot-V",
      "aggressive",
      "crackle"
    ],
    "signature": "The E63's engine with the manners removed. Barks, crackles, and settles into a hard idle.",
    "image": "/images/amggtr.jpg",
    "sound": "/sounds/amggtr.m4a",
    "link": "https://www.mbusa.com/mercedes/vehicles/model/class-GT/model-GTR",
    "imageCredit": {
      "name": "Unsplash",
      "url": "https://unsplash.com/photos/qyfco1nfMtg"
    },
    "soundCredit": {
      "name": "#GCOS",
      "url": "https://www.youtube.com/watch?v=Fg7wyA7yy0c"
    }
  },
  {
    "id": "vantage2010",
    "year": 2010,
    "make": "Aston Martin",
    "model": "V8 Vantage",
    "trim": "",
    "engine": {
      "layout": "V8",
      "cylinders": 8,
      "displacement": 4.7,
      "aspiration": "NA"
    },
    "power": 420,
    "redline": 7300,
    "tags": [
      "NA-V8",
      "bassy",
      "british"
    ],
    "signature": "Not the fastest car here and it doesn't matter. A naturally aspirated British V8 with a bypass valve and perfect timing.",
    "image": "/images/vantage2010.jpg",
    "sound": "/sounds/vantage2010.m4a",
    "link": "https://www.astonmartin.com/en-us/models/new-vantage",
    "imageCredit": {
      "name": "JLSTMS",
      "url": "https://jlstms.com"
    },
    "soundCredit": {
      "name": "AutomannTV",
      "url": "https://www.youtube.com/watch?v=Le_oj8WgdTs"
    }
  },
  {
    "id": "viper",
    "year": 2016,
    "make": "Dodge",
    "model": "Viper",
    "trim": "ACR",
    "engine": {
      "layout": "V10",
      "cylinders": 10,
      "displacement": 8.4,
      "aspiration": "NA"
    },
    "power": 645,
    "redline": 6200,
    "tags": [
      "V10",
      "truck-engine",
      "brutal"
    ],
    "signature": "Eight point four litres. Ten cylinders. Side pipes. Sounds less like an engine than a controlled industrial accident.",
    "image": "/images/viper.jpg",
    "sound": "/sounds/viper.m4a",
    "link": "https://www.dodge.com/viper.html",
    "imageCredit": {
      "name": "Cars.com",
      "url": "https://cars.com"
    },
    "soundCredit": {
      "name": "Cars.com",
      "url": "https://cars.com"
    }
  },
  {
    "id": "911gt2rs",
    "year": 2018,
    "make": "Porsche",
    "model": "911",
    "trim": "GT2 RS",
    "engine": {
      "layout": "F6",
      "cylinders": 6,
      "displacement": 3.8,
      "aspiration": "Twin-Turbo"
    },
    "power": 700,
    "redline": 7200,
    "tags": [
      "flat-six",
      "turbo",
      "widowmaker"
    ],
    "signature": "Flat-six architecture buried under two turbos. Thin, hard, and slightly frightening — as intended.",
    "image": "/images/911gt2rs.jpg",
    "sound": "/sounds/911gt2rs.m4a",
    "link": "https://www.porsche.com/usa/models/911/911-gt2-rs/911-gt2-rs/",
    "imageCredit": {
      "name": "Kyle Fletcher",
      "url": "https://www.flickr.com/photos/122766537@N03/46367409725/in/album-72157707141254655/"
    },
    "soundCredit": {
      "name": "NM2255",
      "url": "https://www.youtube.com/watch?v=eRNYon2WM44"
    }
  },
  {
    "id": "focusrs",
    "year": 2016,
    "make": "Ford",
    "model": "Focus",
    "trim": "RS",
    "engine": {
      "layout": "I4",
      "cylinders": 4,
      "displacement": 2.3,
      "aspiration": "Turbo"
    },
    "power": 350,
    "redline": 6800,
    "tags": [
      "pops",
      "anti-lag",
      "hatch"
    ],
    "signature": "A four-cylinder with a mischief mode. The overrun pops are pure calibration, and pure fun.",
    "image": "/images/focusrs.jpg",
    "sound": "/sounds/focusrs.m4a",
    "link": "https://www.ford.com",
    "imageCredit": {
      "name": "Justin Chan",
      "url": "https://www.flickr.com/photos/falsely/32541775167/in/photostream/"
    },
    "soundCredit": {
      "name": "AutoTopNL",
      "url": "https://www.youtube.com/watch?v=OeZ28y1p-ug"
    }
  }
];

export const carById = (id: string) => cars.find((c) => c.id === id);

/** "2012 Lexus LFA" — trim appended only when it exists. */
export const fullName = (c: Car) =>
  [c.year, c.make, c.model, c.trim].filter(Boolean).join(' ');

/** "4.8L V10 · naturally aspirated" */
export const engineLabel = (c: Car) =>
  `${c.engine.displacement.toFixed(1)}L ${c.engine.layout} · ${
    c.engine.aspiration === 'NA' ? 'naturally aspirated' : c.engine.aspiration.toLowerCase()
  }`;

/**
 * Every photo we hold for a car: the original curated hero first, then the
 * Creative Commons set from Wikimedia Commons. Each carries its own credit and
 * licence, so the gallery can attribute whichever frame is on screen.
 */
export const photosFor = (c: Car): Photo[] => [
  {
    src: c.image,
    credit: c.imageCredit.name,
    creditUrl: c.imageCredit.url,
    license: "Editorial",
    source: c.imageCredit.url,
  },
  ...(commonsPhotos[c.id] ?? []),
];
