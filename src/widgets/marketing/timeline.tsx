import Image from "next/image";
import { bigMaker } from "../../../app/fonts";
import {
  TIMELINE_HEADER,
  TIMELINE_IMAGES,
  TIMELINE_STAGES,
  TIMELINE_STAGE_LAYOUT,
  type TimelineStage,
} from "./data/timeline-data";

type TimelineHeader = {
  title: string;
  subtitle: string;
};

type TimelineImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

type TimelineProps = {
  header?: TimelineHeader;
  stages?: TimelineStage[];
  images?: TimelineImage[];
  stageLayout?: readonly string[];
};

export function Timeline({
  header = TIMELINE_HEADER,
  stages = TIMELINE_STAGES,
  images = [...TIMELINE_IMAGES],
  stageLayout = TIMELINE_STAGE_LAYOUT,
}: TimelineProps) {
  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="relative mx-auto w-full overflow-hidden bg-white">
        <div className="absolute inset-x-0 bottom-0 h-[34%]" />

        <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
          {images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.className}
            />
          ))}
        </div>

        <div className="relative z-10 h-full px-4 py-10 sm:px-6 sm:py-14 lg:px-[5%] lg:py-20">
          <div className="grid h-full grid-cols-1 gap-y-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr_1fr_1fr] lg:gap-x-6 lg:gap-y-0">
            <header className="text-center lg:col-start-4 lg:col-span-9 lg:pt-[6%]">
              <div
                className={`${bigMaker.className} text-[56px] leading-none sm:text-7xl lg:text-9xl lg:scale-200`}
              >
                {header.title}
              </div>
              <div className="text-2xl -mt-1 sm:text-3xl lg:text-5xl lg:-mt-6">
                {header.subtitle}
              </div>
            </header>

            {stages.map((stage, index) => (
              <div
                key={`${stage.range}-${index}`}
                className={`mx-auto w-full min-w-0 max-w-3xl lg:max-w-none lg:self-start ${stageLayout[index] ?? ""}`}
              >
                <StageRow stage={stage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StageRow({ stage }: { stage: TimelineStage }) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-y-3 lg:grid-cols-[220px_1fr] lg:items-start lg:gap-x-10">
      <div className="text-center">
        <div
          className={`${bigMaker.className} text-[clamp(42px,16vw,72px)] leading-none lg:text-[clamp(60px,6vw,100px)]`}
        >
          {stage.range}
        </div>
        <div className="text-xs -mt-4 tracking-[0.2em] lg:text-[clamp(12px,1.2vw,16px)] lg:-mt-10">
          {stage.unit}
        </div>
      </div>

      <div className="min-w-0 pt-0 lg:pt-2">
        <ul className="list-disc pl-5 font-serif text-[#3a2a24] text-[14px] sm:text-[15px] wrap-break-word lg:text-[clamp(12px,1.05vw,15px)] lg:leading-[1.55]">
          {stage.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {stage.note && <li className="mt-2 italic">{stage.note}</li>}
        </ul>
      </div>
    </div>
  );
}
