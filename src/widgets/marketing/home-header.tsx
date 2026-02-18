import { HeroBanner } from "@/shared/ui/hero-banner";
import { PrimaryNav } from "@/shared/ui/primary-nav";
import { TopBar } from "@/shared/ui/top-bar";
import { mainNavigation } from "@/shared/config/navitems";
import { BurgerButton } from "@/shared/ui/burger-button";
import { ContactBannerSlider } from "@/shared/ui/contact-banner-slider";

export function HomeHeader() {
  const contactSlides = [
    {
      id: "slide-1",
      imageSrc: "/hero-banner.jpg",
      imageAlt: "Novios sonriendo durante su boda",
      logoText: "TU BODA",
      phone: "+56 9 1234 5678",
      email: "contacto@tuboda.cl",
      website: "www.tuboda.cl",
      ctaLabel: "Ver Perfil",
      ctaHref: "/registro",
    },
    {
      id: "slide-2",
      imageSrc: "/hero-banner.jpg",
      imageAlt: "Decoracion floral de evento nupcial",
      logoText: "TU BODA",
      phone: "+56 2 2345 6789",
      email: "ventas@tuboda.cl",
      website: "www.tubodaeventos.cl",
      ctaLabel: "Ver Perfil",
      ctaHref: "/registro",
    },
  ];

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
          ctaHref="/registro"
        />
        <PrimaryNav items={mainNavigation} />
        <TopBar logoText="TU BODA" />
      </div>
      <ContactBannerSlider slides={contactSlides} />
    </header>
  );
}
