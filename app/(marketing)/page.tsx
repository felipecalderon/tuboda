import { getFeaturedServices } from "@/entities/service/api/get-featured-services";
import { HomePageView } from "@/views/marketing/home-page";

export default async function MarketingHomePage() {
  const featuredServices = await getFeaturedServices();
  return <HomePageView featuredServices={featuredServices} />;
}
