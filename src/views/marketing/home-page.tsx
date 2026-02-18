import type { WeddingService } from "@/entities/service/model/types";
import { FeaturedServices } from "@/widgets/marketing/featured-services";
import { HomeHeader } from "@/widgets/marketing/home-header";

interface HomePageViewProps {
  featuredServices: WeddingService[];
}

export function HomePageView({ featuredServices }: HomePageViewProps) {
  return (
    <main>
      <HomeHeader />
      <FeaturedServices services={featuredServices} />
    </main>
  );
}
