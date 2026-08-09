"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

/** A/B comparison is the whole point, so the slate holds exactly two. */
export const MAX_COMPARE = 2;

type CompareApi = {
  selected: string[];
  toggle: (id: string) => void;
  clear: () => void;
  isFull: boolean;
};

const Ctx = createContext<CompareApi | null>(null);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = useCallback((id: string) => {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      // Already holding two? Drop the older one and slide this in, so picking
      // a third car never dead-ends the user with a "clear first" message.
      return [...current, id].slice(-MAX_COMPARE);
    });
  }, []);

  const clear = useCallback(() => setSelected([]), []);

  const value = useMemo(
    () => ({ selected, toggle, clear, isFull: selected.length === MAX_COMPARE }),
    [selected, toggle, clear],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCompare() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCompare must be used inside <CompareProvider>");
  return ctx;
}
