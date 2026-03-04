import { getFeaturedServices } from "@/entities/service/api/get-featured-services";
import { homeContactSlides } from "@/shared/config/home-contact-slides";
import { mainNavigation } from "@/shared/config/navitems";
import { ContactBannerSlider } from "@/shared/ui/contact-banner-slider";
import { PrimaryNav } from "@/shared/ui/primary-nav";
import { Blog } from "@/widgets/marketing/blog";
import { Events } from "@/widgets/marketing/events";
import { ExpoChile } from "@/widgets/marketing/expochile";
import { FeaturedServices } from "@/widgets/marketing/featured-services";
import { HomeHeader } from "@/widgets/marketing/home-header";
import { SoyEmpresa } from "@/widgets/marketing/soyempresa";
import { TheWeddingComponent } from "@/widgets/marketing/the-wedding";
import { SoyNovia } from "@/widgets/marketing/thenovia";
import { Timeline } from "@/widgets/marketing/timeline";

export default async function MarketingHomePage() {
  const services = await getFeaturedServices();
  return (
    <main className="bottom-fade">
      <HomeHeader />
      <PrimaryNav items={mainNavigation} />
      <ContactBannerSlider slides={homeContactSlides} />
      <TheWeddingComponent />
      <section id="academia-expert" className="scroll-mt-24">
        <Timeline />
      </section>
      <section id="soy-novia" className="scroll-mt-24">
        <SoyNovia />
      </section>
      <section id="blog" className="scroll-mt-24">
        <Blog />
      </section>
      <section id="expo-chile" className="scroll-mt-24">
        <Events />
      </section>
      <section id="soy-empresa" className="scroll-mt-24">
        <SoyEmpresa />
      </section>
      <ExpoChile />
      <FeaturedServices services={services} />
    </main>
  );
}
