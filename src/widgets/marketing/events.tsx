import { events } from "@/shared/config/events";
import { EventLogo } from "@/shared/ui/event-logo";
import { HorizontalGalleryST } from "@/shared/ui/gallery-horizontal-static";
import Image from "next/image";

export const Events = () => {
  return (
    <div>
      <p className="text-left text-3xl leading-none sm:text-9xl">TU BODA</p>
      <div className="flex items-center gap-2 max-w-xl">
        <div className="h-px bg-gray-600 flex-1" />
        <span className="text-3xl">EXPO CHILE 2026</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {events.map((event) => (
          <EventLogo key={`${event.eventPlace}-${event.mes}`} {...event} />
        ))}
      </div>
      <div className="bg-white w-fit rounded-2xl px-6 py-3 shadow-2xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all mx-auto">
        <Image
          src="/logos/passline.png"
          alt="Logo passline al link de pago del evento"
          width={400}
          height={200}
        />
      </div>
      <Image
        src="/logos/bridalmarket.png"
        alt="Logo bridal market"
        width={400}
        height={400}
        className="py-10 mx-auto"
      />
      <HorizontalGalleryST
        images={[
          "/assets/tuboda-evento1.jpg",
          "/assets/tuboda-evento2.jpg",
          "/assets/tuboda-evento3.jpg",
          "/assets/tuboda-evento4.jpg",
          "/assets/tuboda-evento5.jpg",
        ]}
      />
    </div>
  );
};
