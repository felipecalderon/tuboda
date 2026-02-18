"use client";

import { useEffect } from "react";

interface UseContactModalEffectsParams {
  isOpen: boolean;
  onClose: () => void;
}

export function useContactModalEffects({
  isOpen,
  onClose,
}: UseContactModalEffectsParams) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);
}
