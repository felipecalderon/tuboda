"use client";

import { useEffect, useState } from "react";

interface UseContactBannerSliderParams {
  slideCount: number;
  autoPlayMs: number;
}

export function useContactBannerSlider({
  slideCount,
  autoPlayMs,
}: UseContactBannerSliderParams) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slideCount <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, autoPlayMs);

    return () => window.clearInterval(intervalId);
  }, [autoPlayMs, slideCount]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideCount);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return {
    activeSlide,
    prevSlide,
    nextSlide,
    goToSlide,
  };
}
