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
  return (
    <header className="bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative">
          <TopBar logoText={logoText} />
          <BurgerButton />
        </div>
        <HeroBanner {...hero} />
        <TopBar logoText={logoText} />
      </div>
    </header>
  );
}
