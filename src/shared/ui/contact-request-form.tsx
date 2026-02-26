"use client";

import { useContactRequestForm } from "@/shared/hooks/use-contact-request-form";
import {
  budgetRangeOptions,
  ceremonyTypeOptions,
} from "@/shared/lib/contact-request-schema";

interface ContactRequestFormProps {
  onSuccess?: () => void;
}

export function ContactRequestForm({ onSuccess }: ContactRequestFormProps) {
  const { register, errors, isSubmitting, onSubmit } = useContactRequestForm({
    onSuccess,
  });

  return (
    <form onSubmit={onSubmit} className="">
      <div className="flex flex-col gap-2">
        <label className="text-xs">
          Nombre de la novia:
          <input
            {...register("brideName")}
            className="w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.brideName ? (
            <span className="block text-[11px] text-red-700">
              {errors.brideName.message}
            </span>
          ) : null}
        </label>

        <label className="text-xs">
          Nombre del novio:
          <input
            {...register("groomName")}
            className="w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.groomName ? (
            <span className="block text-[11px] text-red-700">
              {errors.groomName.message}
            </span>
          ) : null}
        </label>
        <label className="text-xs">
          Correo de contacto:
          <input
            type="email"
            {...register("contactEmail")}
            className="w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.contactEmail ? (
            <span className="block text-[11px] text-red-700">
              {errors.contactEmail.message}
            </span>
          ) : null}
        </label>

        <label className="text-xs sm:col-span-2">
          Telefono de contacto:
          <input
            {...register("contactPhone")}
            className="w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.contactPhone ? (
            <span className="block text-[11px] text-red-700">
              {errors.contactPhone.message}
            </span>
          ) : null}
        </label>

        <label className="text-xs">
          Fecha del matrimonio:
          <input
            type="date"
            {...register("weddingDate")}
            className="w-full bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.weddingDate ? (
            <span className="block text-[11px] text-red-700">
              {errors.weddingDate.message}
            </span>
          ) : null}
        </label>

        <label className="text-xs">
          Ciudad o comuna del evento
          <input
            {...register("city")}
            className="w-full bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.city ? (
            <span className="block text-[11px] text-red-700">
              {errors.city.message}
            </span>
          ) : null}
        </label>

        <label className="text-xs">
          Cantidad de invitados
          <input
            type="number"
            {...register("guestCount", { valueAsNumber: true })}
            className="w-full bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.guestCount ? (
            <span className="block text-[11px] text-red-700">
              {errors.guestCount.message}
            </span>
          ) : null}
        </label>

        <label className="text-xs sm:col-span-2">
          Cuentanos mas sobre tu matrimonio (opcional)
          <textarea
            rows={4}
            {...register("notes")}
            className="w-full bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.notes ? (
            <span className="block text-[11px] text-red-700">
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
          {isSubmitting ? "ENVIANDO..." : "BUSCAR PROVEEDORES DE BODA"}
        </button>
      </div>
    </form>
  );
}
