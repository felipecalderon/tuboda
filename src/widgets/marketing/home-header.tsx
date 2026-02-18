import { HeroBanner } from "@/shared/ui/hero-banner";
import { PrimaryNav } from "@/shared/ui/primary-nav";
import { TopBar } from "@/shared/ui/top-bar";
import { mainNavigation } from "@/shared/config/navitems";

export function HomeHeader() {
  return (
    <header className="w-full bg-[#f6f3ee]">
      <div className="mx-auto max-w-6xl px-6">
        <TopBar logoText="TU BODA" />
        <HeroBanner
          imageSrc="/hero-banner.jpg"
          imageAlt="Novios celebrando en su boda"
          ctaLabel="COMENZAR MI PLANIFICACION"
          ctaHref="/registro"
        />
        <PrimaryNav items={mainNavigation} />
      </div>
    </header>
  );
}
