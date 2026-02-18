import Link from "next/link";

interface CTAProps {
  ctaHref: string;
  ctaLabel: string;
}
export function CTAButton({ ctaHref, ctaLabel }: CTAProps) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-end px-10 sm:pr-16">
      <Link
        href={ctaHref}
        className="animated-border-btn pointer-events-auto relative inline-flex items-center justify-center px-8 py-3 text-xs font-semibold tracking-[0.12em] text-white backdrop-blur-[1px] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
      >
        {/* Background fill */}
        <span className="absolute inset-0 bg-black/30" />

        {/* Thick rotating line - clockwise */}
        <span className="animated-border-thick absolute inset-0 overflow-hidden">
          <span className="absolute -inset-px animate-[border-rotate_4s_linear_infinite]" />
        </span>

        {/* Thin rotating line - counter-clockwise */}
        <span className="animated-border-thin absolute inset-0 overflow-hidden">
          <span className="absolute -inset-px animate-[border-rotate-reverse_6s_linear_infinite]" />
        </span>

        {/* Static subtle border for base visibility */}
        <span className="absolute inset-0 border border-white/20" />

        {/* Text content */}
        <span className="relative z-10">{ctaLabel}</span>
      </Link>
    </div>
  );
}
