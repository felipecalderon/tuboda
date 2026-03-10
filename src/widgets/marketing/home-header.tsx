"use client";

import { useEffect, useRef, useState } from "react";
import { BurgerButton } from "@/shared/ui/burger-button";
import { HeroBanner } from "@/shared/ui/hero-banner";
import { TopBar } from "@/shared/ui/top-bar";
import { HOME_HEADER_CONTENT } from "./data/home-header-data";

type HomeHeaderProps = {
  logoText?: string;
  hero?: {
    imageSrc: string;
    imageAlt: string;
    ctaLabel: string;
    ctaScrollTargetId: string;
  };
};

export function HomeHeader({
  logoText = HOME_HEADER_CONTENT.logoText,
  hero = HOME_HEADER_CONTENT.hero,
}: HomeHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-30 bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative">
          <TopBar logoText={logoText} />
          <div
            ref={menuRef}
            className="absolute right-0 top-1/2 z-40 -translate-y-1/2"
          >
            <BurgerButton
              isOpen={isMenuOpen}
              onMenuClick={() => setIsMenuOpen((prev) => !prev)}
            />
            {isMenuOpen ? (
              <div
                role="menu"
                aria-label="Menú de usuario"
                className="absolute right-0 z-50 mt-3 w-44 rounded-md border border-black/10 bg-white py-2 text-sm shadow-lg"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="w-full px-4 py-2 text-left text-black/80 hover:bg-black/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar sesión
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <HeroBanner {...hero} />
        <TopBar logoText={logoText} />
      </div>
    </header>
  );
}
