import type { EventData } from "@/entities/service/model/types";
import { events as defaultEvents } from "@/shared/config/events";
import { EventLogo } from "@/shared/ui/event-logo";
import { HorizontalGalleryST } from "@/shared/ui/gallery-horizontal-static";
import Image from "next/image";
import { SectionShell } from "./components/section-shell";
import { EVENTS_CONTENT } from "./data/events-data";

type EventsProps = {
  content?: typeof EVENTS_CONTENT;
  items?: EventData[];
};

export const Events = ({
  content = EVENTS_CONTENT,
  items = defaultEvents,
}: EventsProps) => {
  return (
    <SectionShell>
      <p className="text-left text-3xl leading-none sm:text-9xl">{content.title}</p>
      <div className="flex items-center gap-2 max-w-xl">
        <div className="h-px bg-gray-600 flex-1" />
        <span className="text-3xl">{content.subtitle}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {items.map((event) => (
          <EventLogo key={`${event.eventPlace}-${event.mes}`} {...event} />
        ))}
      </div>
      <div className="bg-white w-fit rounded-2xl px-6 py-3 shadow-2xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all mx-auto">
        <Image
          src={content.passlineLogo.src}
          alt={content.passlineLogo.alt}
          width={content.passlineLogo.width}
          height={content.passlineLogo.height}
        />
      </div>
      <Image
        src={content.bridalMarketLogo.src}
        alt={content.bridalMarketLogo.alt}
        width={content.bridalMarketLogo.width}
        height={content.bridalMarketLogo.height}
        className="py-10 mx-auto"
      />
      <HorizontalGalleryST images={[...content.galleryImages]} />
    </SectionShell>
  );
};
