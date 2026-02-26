"use client";

import { useContactModal } from "@/shared/hooks/use-contact-modal";
import { useContactModalEffects } from "@/shared/hooks/use-contact-modal-effects";
import { ContactRequestForm } from "@/shared/ui/contact-request-form";

export function ContactRequestModal() {
  const { isOpen, closeModal } = useContactModal();

  useContactModalEffects({ isOpen, onClose: closeModal });

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-250 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={closeModal}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      <div
        className={`relative z-10 w-full max-w-3xl overflow-hidden border border-secondary/20 bg-primary shadow-2xl transition-all duration-250 ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-secondary/20 px-5 py-4 sm:px-8">
          <div>
            <h2 id="contact-modal-title" className="text-lg tracking-[0.08em]">
              COTIZA TU MATRIMONIO
            </h2>
            <p className="text-xs text-secondary/80">
              Completa este formulario y te contactaremos con propuestas.
            </p>
          </div>

          <button
            type="button"
            aria-label="Cerrar modal"
            onClick={closeModal}
            className="h-10 w-10 border border-secondary/30 text-base transition-colors hover:bg-secondary/10"
          >
            X
          </button>
        </div>

        <ContactRequestForm onSuccess={closeModal} />
      </div>
    </div>
  );
}
