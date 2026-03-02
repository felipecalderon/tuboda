import { getFeaturedServices } from "@/entities/service/api/get-featured-services";
import { homeContactSlides } from "@/shared/config/home-contact-slides";
import { ContactBannerSlider } from "@/shared/ui/contact-banner-slider";
import { Blog } from "@/widgets/marketing/blog";
import { FeaturedServices } from "@/widgets/marketing/featured-services";
import { HomeHeader } from "@/widgets/marketing/home-header";
import { TheWeddingComponent } from "@/widgets/marketing/the-wedding";
import { SoyNovia } from "@/widgets/marketing/thenovia";
import { Timeline } from "@/widgets/marketing/timeline";

export default async function MarketingHomePage() {
  const services = await getFeaturedServices();
  return (
    <main>
      <HomeHeader />
      <ContactBannerSlider slides={homeContactSlides} />
      <TheWeddingComponent />
      <Timeline />
      <SoyNovia />
      <Blog />
      <FeaturedServices services={services} />
    </main>
  );
}
