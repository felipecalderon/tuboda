"use client";

import { useCallback } from "react";
import { scrollToTarget } from "@/shared/lib/scroll-to-target";

export function useSmoothScroll() {
  return useCallback((targetId: string) => scrollToTarget(targetId), []);
}
