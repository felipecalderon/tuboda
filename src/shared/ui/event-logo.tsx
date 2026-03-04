import Image from "next/image";

type EventHeaderProps = {
  diaInicio: string;
  diaFin: string;
  mes: string;
  anno: number;
  logoSrc: string;
  eventPlace: string;
};

export function EventLogo({
  diaInicio,
  diaFin,
  mes,
  anno,
  logoSrc,
  eventPlace,
}: EventHeaderProps) {
  return (
    <section className="w-full max-w-xl mx-auto px-6 py-10">
      <div className="flex items-center justify-center gap-8">
        {/* Date Block */}
        <div className="flex items-start gap-1 leading-none">
          {/* Days + Year column */}
          <div className="flex flex-col items-end">
            <span className="font-serif text-[#6B4C3B] text-[4.5rem] leading-[0.85] font-light tracking-tight">
              {diaInicio}
            </span>
            <span className="font-serif text-[#6B4C3B] text-[4.5rem] leading-[0.85] font-light tracking-tight">
              {diaFin}
            </span>
            <span className="font-serif text-[#6B4C3B] text-[2rem] leading-none font-medium mt-1">
              {anno}
            </span>
          </div>

          {/* Month vertical */}
          <div
            className="flex items-center self-stretch pt-1"
            style={{ height: "auto" }}
          >
            <span
              className="uppercase text-[#6B4C3B] text-xl tracking-[0.35em]"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                letterSpacing: "0.3em",
              }}
            >
              {mes}
            </span>
          </div>
        </div>

        {/* Logo */}
        <div className="shrink-0">
          <Image
            width={160}
            height={160}
            src={logoSrc}
            alt="Event logo"
            className="w-36 h-36 object-contain select-none rounded-2xl"
            draggable={false}
          />
        </div>
      </div>

      {/* Place name below */}
      <div className="text-center mt-4">
        <span className="block text-[#3A3A3A] text-2xl font-semibold tracking-[0.25em] uppercase font-sans">
          {eventPlace}
        </span>
      </div>
    </section>
  );
}
