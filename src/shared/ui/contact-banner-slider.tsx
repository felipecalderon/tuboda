"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ContactBannerSlide {
  id: string;
  imageSrc: string;
  imageAlt: string;
  logoText: string;
  phone: string;
  email: string;
  website: string;
  ctaLabel: string;
  ctaHref: string;
}

interface ContactBannerSliderProps {
  slides: ContactBannerSlide[];
  autoPlayMs?: number;
}

export function ContactBannerSlider({
  slides,
  autoPlayMs = 5500,
}: ContactBannerSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayMs);

    return () => window.clearInterval(intervalId);
  }, [autoPlayMs, slides.length]);

  if (!slides.length) return null;

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="w-full bg-primary py-8">
      <div className="relative mx-auto h-125 w-full overflow-hidden">
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute right-16 top-1/2 z-10 w-[min(92%,650px)] -translate-y-1/2 bg-white/95 p-6 text-foreground shadow-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-[170px_1fr] sm:items-center">
                <div className="border border-muted bg-surface px-4 py-6 text-center text-xl tracking-[0.25em] text-secondary">
                  {slide.logoText}
                </div>

                <div className="space-y-2 text-xs">
                  <p>
                    <span className="font-semibold">Telefono:</span>{" "}
                    {slide.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Correo:</span> {slide.email}
                  </p>
                  <p>
                    <span className="font-semibold">Sitio web:</span>{" "}
                    {slide.website}
                  </p>
                  <Link
                    href={slide.ctaHref}
                    className="mt-3 inline-block bg-secondary px-5 py-3 text-xs font-semibold tracking-[0.12em] text-white transition-colors hover:bg-secondary/90"
                  >
                    {slide.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Slide anterior"
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 border border-white/45 bg-black/25 px-3 py-2 text-white transition-colors hover:bg-black/40"
            >
              {"<"}
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Slide siguiente"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 border border-white/45 bg-black/25 px-3 py-2 text-white transition-colors hover:bg-black/40"
            >
              {">"}
            </button>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ir al slide ${index + 1}`}
                  className={`h-2 w-7 ${
                    index === activeSlide ? "bg-white" : "bg-white/45"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
