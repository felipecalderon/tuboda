import type { WeddingService } from "@/entities/service/model/types";

interface FeaturedServicesProps {
  services: WeddingService[];
}

const categoryLabel: Record<WeddingService["category"], string> = {
  fotografia: "Fotografia",
  banqueteria: "Banqueteria",
  vestuario: "Vestuario",
  locaciones: "Locaciones",
  decoracion: "Decoracion",
};

export function FeaturedServices({ services }: FeaturedServicesProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-xl tracking-[0.08em] text-secondary sm:text-2xl">
        Servicios destacados
      </h2>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.id}
            className="rounded-md border border-black/10 bg-white p-4"
          >
            <p className="text-sm tracking-[0.08em] text-black/60">
              {categoryLabel[service.category]}
            </p>
            <h3 className="mt-2 text-lg text-secondary">{service.name}</h3>
            <p className="mt-1 text-sm text-black/70">{service.city}</p>
            {service.isPremium ? (
              <span className="mt-3 inline-flex rounded-full border border-secondary px-3 py-1 text-xs tracking-[0.08em] text-secondary">
                Premium
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
