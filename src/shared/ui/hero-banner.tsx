import Image from "next/image";
import { CTAButton } from "./cta-button";

export function HeroBanner({
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaScrollTargetId,
}: {
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaScrollTargetId?: string;
}) {
  return (
    <div className="relative overflow-hidden border border-black/10 bg-white">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={800}
        height={400}
        className="h-65 w-full object-cover sm:h-80"
        loading="eager"
      />

      <CTAButton ctaLabel={ctaLabel} scrollTargetId={ctaScrollTargetId} />
    </div>
  );
}
