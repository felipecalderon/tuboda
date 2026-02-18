import type { WeddingService } from "@/entities/service/model/types";

export const featuredServicesMock: WeddingService[] = [
  {
    id: "serv-001",
    name: "Ambar Eventos",
    category: "banqueteria",
    city: "Santiago",
    isPremium: true,
  },
  {
    id: "serv-002",
    name: "Luz de Novia",
    category: "fotografia",
    city: "Valparaiso",
    isPremium: true,
  },
  {
    id: "serv-003",
    name: "Jardin del Lago",
    category: "locaciones",
    city: "Puerto Varas",
    isPremium: false,
  },
];
