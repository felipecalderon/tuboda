import { getFeaturedServices } from "@/entities/service/api/get-featured-services";
import { FeaturedServices } from "@/widgets/marketing/featured-services";
import { HomeHeader } from "@/widgets/marketing/home-header";

export default async function MarketingHomePage() {
  const services = await getFeaturedServices();
  return (
    <main>
      <HomeHeader />
      <FeaturedServices services={services} />
    </main>
  );
}
