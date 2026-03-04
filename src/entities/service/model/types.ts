export type ServiceCategory =
  | "fotografia"
  | "banqueteria"
  | "vestuario"
  | "locaciones"
  | "decoracion";

export interface WeddingService {
  id: string;
  name: string;
  category: ServiceCategory;
  city: string;
  isPremium: boolean;
}

export type EventData = {
  anno: number;
  diaInicio: string;
  diaFin: string;
  mes: string;
  eventPlace: string;
  logoSrc: string;
};
