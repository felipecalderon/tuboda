"use client";

import { useBusinessRequestForm } from "../hooks/use-business-request-form";

export function BusinessRequestForm() {
  const { register, errors, isSubmitting, onSubmit } = useBusinessRequestForm({
    onSuccess: (values) => {
      console.log(values);
    },
  });

  const options = [
    {
      value: "online",
      label: "Plataforma online",
      description: "Escoge entre las novedosas plantillas web.",
    },
    {
      value: "presencial",
      label: "Evento Presencial",
      description: "Conectamos redes para un evento integral",
    },
  ] as const;

  return (
    <form onSubmit={onSubmit} className="pt-10">
      <div className="flex flex-col gap-2">
        <label className="text-xs">
          Nombre
          <input
            {...register("name")}
            className="w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.name ? (
            <span className="block text-[11px] text-red-700">
              {errors.name.message}
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
          Ciudad o comuna
          <input
            {...register("city")}
            className="w-full border border-secondary/25 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          {errors.city ? (
            <span className="block text-[11px] text-red-700">
              {errors.city.message}
            </span>
          ) : null}
        </label>
      </div>

      <fieldset className="space-y-4 mt-6">
        <legend className="text-md text-gray-900">Tipo de modalidad</legend>

        {options.map((option) => (
          <label
            key={option.value}
            className="relative flex flex-col p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all cursor-pointer has-checked:border-indigo-600 has-checked:bg-indigo-50 has-checked:shadow-md"
          >
            <input
              type="radio"
              value={option.value}
              {...register("modalidad")}
              className="sr-only peer"
            />

            <div className="flex items-start justify-between">
              <div>
                <span className="block text-base font-medium text-gray-900 peer-checked:text-indigo-700">
                  {option.label}
                </span>
                <span className="block text-sm text-gray-500 mt-1">
                  {option.description}
                </span>
              </div>
            </div>
          </label>
        ))}

        {errors.modalidad && (
          <p className="text-sm text-red-600">{errors.modalidad.message}</p>
        )}
      </fieldset>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center border border-secondary bg-secondary px-4 py-3 text-center text-[11px] font-semibold leading-tight tracking-[0.08em] text-white transition-colors hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-6 sm:text-xs sm:tracking-[0.12em]"
        >
          {isSubmitting ? "ENVIANDO..." : "REGÍSTRATE"}
        </button>
      </div>
    </form>
  );
}
