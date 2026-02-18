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
