import type { WeddingService } from "@/entities/service/model/types";

export const SERVICE_CATEGORY_LABEL: Record<WeddingService["category"], string> = {
  fotografia: "Fotografia",
  banqueteria: "Banqueteria",
  vestuario: "Vestuario",
  locaciones: "Locaciones",
  decoracion: "Decoracion",
};
