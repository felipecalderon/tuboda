import type { ContactBannerSlide } from "@/shared/lib/contact-banner-types";

export const homeContactSlides: ContactBannerSlide[] = [
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
