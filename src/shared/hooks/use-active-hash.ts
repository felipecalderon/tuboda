"use client";

import { useEffect, useMemo, useState } from "react";

function normalizeHash(value: string) {
  return value.startsWith("#") ? value : `#${value}`;
}

export function useActiveHash(hashes: string[]) {
  const normalizedHashes = useMemo(
    () => hashes.map((hash) => normalizeHash(hash)),
    [hashes]
  );
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || normalizedHashes.length === 0) {
      return;
    }

    const getCurrentHash = () => {
      const threshold = 140;
      let current = normalizedHashes[0];
      let bestTop = Number.NEGATIVE_INFINITY;

      for (const hash of normalizedHashes) {
        const element = document.getElementById(hash.slice(1));
        if (!element) {
          continue;
        }

        const top = element.getBoundingClientRect().top;
        if (top <= threshold && top > bestTop) {
          bestTop = top;
          current = hash;
        } else if (bestTop === Number.NEGATIVE_INFINITY && top > threshold) {
          current = hash;
          break;
        }
      }

      return current;
    };

    const updateHash = () => {
      const locationHash = window.location.hash;
      if (locationHash && normalizedHashes.includes(locationHash)) {
        setActiveHash(locationHash);
        return;
      }
      setActiveHash(getCurrentHash());
    };

    updateHash();
    window.addEventListener("scroll", updateHash, { passive: true });
    window.addEventListener("resize", updateHash);
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("scroll", updateHash);
      window.removeEventListener("resize", updateHash);
      window.removeEventListener("hashchange", updateHash);
    };
  }, [normalizedHashes]);

  return { activeHash, setActiveHash };
}
