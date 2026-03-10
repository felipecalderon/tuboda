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
import { BLOG_HEADER, BLOG_IMAGES, BLOG_INTRO, BLOG_QUOTES, BLOG_SECTIONS } from "@/widgets/marketing/data/blog-data";
import { EVENTS_CONTENT } from "@/widgets/marketing/data/events-data";
import { EXPO_CHILE_CONTENT } from "@/widgets/marketing/data/expo-chile-data";
import { HOME_HEADER_CONTENT } from "@/widgets/marketing/data/home-header-data";
import { SOY_EMPRESA_CONTENT } from "@/widgets/marketing/data/soy-empresa-data";
import { SOY_NOVIA_CONTENT } from "@/widgets/marketing/data/soy-novia-data";
import { THE_WEDDING_CONTENT } from "@/widgets/marketing/data/the-wedding-data";
import {
  TIMELINE_HEADER,
  TIMELINE_IMAGES,
  TIMELINE_STAGES,
  TIMELINE_STAGE_LAYOUT,
} from "@/widgets/marketing/data/timeline-data";

export default async function MarketingHomePage() {
  const services = await getFeaturedServices();

  return (
    <main className="bottom-fade">
      <HomeHeader
        logoText={HOME_HEADER_CONTENT.logoText}
        hero={HOME_HEADER_CONTENT.hero}
      />
      <PrimaryNav items={mainNavigation} />
      <ContactBannerSlider slides={homeContactSlides} />
      <TheWeddingComponent content={THE_WEDDING_CONTENT} />
      <section id="academia-expert" className="scroll-mt-24">
        <Timeline
          header={TIMELINE_HEADER}
          stages={TIMELINE_STAGES}
          images={[...TIMELINE_IMAGES]}
          stageLayout={TIMELINE_STAGE_LAYOUT}
        />
      </section>
      <section id="soy-novia" className="scroll-mt-24">
        <SoyNovia content={SOY_NOVIA_CONTENT} />
      </section>
      <section id="blog" className="scroll-mt-24">
        <Blog
          header={BLOG_HEADER}
          intro={BLOG_INTRO}
          quotes={BLOG_QUOTES}
          sections={BLOG_SECTIONS}
          images={BLOG_IMAGES}
        />
      </section>
      <section id="expo-chile" className="scroll-mt-24">
        <Events content={EVENTS_CONTENT} />
      </section>
      <section id="soy-empresa" className="scroll-mt-24">
        <SoyEmpresa content={SOY_EMPRESA_CONTENT} />
      </section>
      <ExpoChile content={EXPO_CHILE_CONTENT} />
      <FeaturedServices services={services} />
    </main>
  );
}
