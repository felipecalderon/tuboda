"use client";

import { useContactModal } from "@/shared/hooks/use-contact-modal";
import { useSmoothScroll } from "@/shared/hooks/use-smooth-scroll";
import { ContactRequestModal } from "@/shared/ui/contact-request-modal";

interface CTAProps {
  ctaLabel: string;
  scrollTargetId?: string;
}

export function CTAButton({ ctaLabel, scrollTargetId }: CTAProps) {
  const { openModal } = useContactModal();
  const smoothScrollTo = useSmoothScroll();
  const shouldScroll = Boolean(scrollTargetId);

  const handleClick = () => {
    if (shouldScroll && scrollTargetId) {
      smoothScrollTo(scrollTargetId);
      return;
    }

    openModal();
  };

  return (
    <>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end px-10 sm:pr-16">
        <button
          type="button"
          onClick={handleClick}
          aria-haspopup={shouldScroll ? undefined : "dialog"}
          aria-controls={shouldScroll ? undefined : "contact-modal-title"}
          className="animated-border-btn pointer-events-auto cursor-pointer relative inline-flex items-center justify-center px-8 py-3 text-xs font-semibold tracking-[0.12em] text-white backdrop-blur-[1px] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
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
        </button>
      </div>

      {!shouldScroll && <ContactRequestModal />}
    </>
  );
}
