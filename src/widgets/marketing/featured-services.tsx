import type { WeddingService } from "@/entities/service/model/types";
import { SERVICE_CATEGORY_LABEL } from "./data/featured-services-data";

interface FeaturedServicesProps {
  services: WeddingService[];
  categoryLabel?: Record<WeddingService["category"], string>;
}

export function FeaturedServices({
  services,
  categoryLabel = SERVICE_CATEGORY_LABEL,
}: FeaturedServicesProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="text-lg tracking-[0.08em] text-secondary sm:text-2xl">
        Servicios destacados
      </h2>

      <ul className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.id}
            className="rounded-md border border-black/10 bg-white p-4 sm:p-5"
          >
            <p className="text-xs tracking-[0.08em] text-black/60 sm:text-sm">
              {categoryLabel[service.category]}
            </p>
            <h3 className="mt-2 text-base text-secondary sm:text-lg">
              {service.name}
            </h3>
            <p className="mt-1 text-xs text-black/70 sm:text-sm">{service.city}</p>
            {service.isPremium ? (
              <span className="mt-3 inline-flex rounded-full border border-secondary px-3 py-1 text-[11px] tracking-[0.08em] text-secondary sm:text-xs">
                Premium
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
