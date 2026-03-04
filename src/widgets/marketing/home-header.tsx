import { HeroBanner } from "@/shared/ui/hero-banner";
import { TopBar } from "@/shared/ui/top-bar";
import { BurgerButton } from "@/shared/ui/burger-button";

export function HomeHeader() {
  return (
    <header className="bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative">
          <TopBar logoText="TU BODA" />
          <BurgerButton />
        </div>
        <HeroBanner
          imageSrc="/hero-banner.jpg"
          imageAlt="Novios celebrando en su boda"
          ctaLabel="COMENZAR MI PLANIFICACION"
          ctaScrollTargetId="the-wedding"
        />
        <TopBar logoText="TU BODA" />
      </div>
    </header>
  );
}
