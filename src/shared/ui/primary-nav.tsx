"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/shared/hooks/use-smooth-scroll";
import { useActiveHash } from "@/shared/hooks/use-active-hash";

export type NavItem = {
  label: string;
  href: string;
};

interface PrimaryNavProps {
  items: NavItem[];
}

export function PrimaryNav({ items }: PrimaryNavProps) {
  const pathname = usePathname();
  const smoothScrollTo = useSmoothScroll();
  const hashItems = useMemo(
    () =>
      items
        .map((item) => {
          if (item.href.startsWith("#")) {
            return item.href;
          }
          if (item.href.startsWith("/") && item.href.includes("#")) {
            return `#${item.href.split("#")[1]}`;
          }
          return "";
        })
        .filter(Boolean),
    [items]
  );
  const { activeHash, setActiveHash } = useActiveHash(hashItems);

  return (
    <nav
      aria-label="Navegación principal"
      className="sticky top-0 z-50 border-y border-black/10 bg-primary/75 backdrop-blur-md transition-colors hover:bg-primary"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-2 py-4 text-[11px] tracking-[0.18em] text-secondary sm:flex-nowrap sm:px-6">
        {items.map((item) => {
          const isHash = item.href.startsWith("#");
          const isPathWithHash = item.href.startsWith("/") && item.href.includes("#");
          const isRouteOnly = item.href.startsWith("/") && !isPathWithHash;
          const [routePath, routeHash] = isPathWithHash
            ? item.href.split("#")
            : [item.href, ""];
          const normalizedRouteHash = routeHash ? `#${routeHash}` : "";
          const isActive =
            (isHash && activeHash === item.href) ||
            (isPathWithHash &&
              pathname === routePath &&
              activeHash === normalizedRouteHash) ||
            (isRouteOnly &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`)));

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => {
                if (!isHash && !isPathWithHash) {
                  return;
                }
                const targetHash = isHash ? item.href : normalizedRouteHash;
                const canSmoothScroll = isHash || pathname === routePath;
                if (!canSmoothScroll || !targetHash) {
                  return;
                }
                event.preventDefault();
                const didScroll = smoothScrollTo(targetHash);
                if (didScroll) {
                  setActiveHash(targetHash);
                  const nextHref =
                    isPathWithHash && routePath ? `${routePath}${targetHash}` : targetHash;
                  window.history.replaceState(null, "", nextHref);
                }
              }}
              aria-current={isActive ? "page" : undefined}
              className={`font-bold transition-colors focus:outline-none focus:underline ${
                isActive ? "text-black underline" : "hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
