"use client";

import { useContactModal } from "@/shared/hooks/use-contact-modal";
import { useContactModalEffects } from "@/shared/hooks/use-contact-modal-effects";
import { useContactRequestForm } from "@/shared/hooks/use-contact-request-form";
import {
  budgetRangeOptions,
  ceremonyTypeOptions,
} from "@/shared/lib/contact-request-schema";

export function ContactRequestModal() {
  const { isOpen, closeModal } = useContactModal();
  const { register, errors, isSubmitting, onSubmit } = useContactRequestForm({
    onSuccess: closeModal,
  });

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

        <form onSubmit={onSubmit} className="max-h-[80vh] overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs">
              Nombre de la novia
              <input
                {...register("brideName")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.brideName ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.brideName.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs">
              Nombre del novio
              <input
                {...register("groomName")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.groomName ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.groomName.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs">
              Fecha del matrimonio
              <input
                type="date"
                {...register("weddingDate")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.weddingDate ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.weddingDate.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs">
              Ciudad o comuna del evento
              <input
                {...register("city")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.city ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.city.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs">
              Cantidad de invitados
              <input
                type="number"
                {...register("guestCount", { valueAsNumber: true })}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.guestCount ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.guestCount.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs">
              Rango de presupuesto
              <select
                {...register("budgetRange")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              >
                {budgetRangeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.budgetRange ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.budgetRange.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs">
              Tipo de ceremonia
              <select
                {...register("ceremonyType")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              >
                {ceremonyTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.ceremonyType ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.ceremonyType.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs">
              Correo de contacto
              <input
                type="email"
                {...register("contactEmail")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.contactEmail ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.contactEmail.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs sm:col-span-2">
              Telefono de contacto
              <input
                {...register("contactPhone")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.contactPhone ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.contactPhone.message}
                </span>
              ) : null}
            </label>

            <label className="text-xs sm:col-span-2">
              Cuentanos mas sobre tu matrimonio (opcional)
              <textarea
                rows={4}
                {...register("notes")}
                className="mt-1 w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              {errors.notes ? (
                <span className="mt-1 block text-[11px] text-red-700">
                  {errors.notes.message}
                </span>
              ) : null}
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center border border-secondary bg-secondary px-6 py-3 text-xs font-semibold tracking-[0.12em] text-white transition-colors hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
