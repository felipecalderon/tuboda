import { HeroBanner } from "@/shared/ui/hero-banner";
import { PrimaryNav } from "@/shared/ui/primary-nav";
import { TopBar } from "@/shared/ui/top-bar";
import { mainNavigation } from "@/shared/config/navitems";
import { BurgerButton } from "@/shared/ui/burger-button";
import { ContactBannerSlider } from "@/shared/ui/contact-banner-slider";
import { homeContactSlides } from "@/shared/config/home-contact-slides";

export function HomeHeader() {
  return (
    <header className="w-full bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative">
          <TopBar logoText="TU BODA" />
          <BurgerButton />
        </div>
        <HeroBanner
          imageSrc="/hero-banner.jpg"
          imageAlt="Novios celebrando en su boda"
          ctaLabel="COMENZAR MI PLANIFICACION"
        />
        <PrimaryNav items={mainNavigation} />
        <TopBar logoText="TU BODA" />
      </div>
      <ContactBannerSlider slides={homeContactSlides} />
    </header>
  );
}
