import "server-only";

import { featuredServicesMock } from "@/entities/service/model/mock-services";
import type { WeddingService } from "@/entities/service/model/types";

export async function getFeaturedServices(): Promise<WeddingService[]> {
  await new Promise((resolve) => setTimeout(resolve, 30));
  return featuredServicesMock;
}
