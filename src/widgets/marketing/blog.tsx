import Image from "next/image";
import { bigMaker } from "../../../app/fonts";
import { QuoteBlock } from "../../shared/components/quote-block";
import { SectionShell } from "../../shared/components/section-shell";
import {
  BLOG_HEADER,
  BLOG_IMAGES,
  BLOG_INTRO,
  BLOG_QUOTES,
  BLOG_SECTIONS,
} from "./data/blog-data";

type BlogProps = {
  header?: typeof BLOG_HEADER;
  intro?: typeof BLOG_INTRO;
  quotes?: typeof BLOG_QUOTES;
  sections?: typeof BLOG_SECTIONS;
  images?: typeof BLOG_IMAGES;
};

export const Blog = ({
  header = BLOG_HEADER,
  intro = BLOG_INTRO,
  quotes = BLOG_QUOTES,
  sections = BLOG_SECTIONS,
  images = BLOG_IMAGES,
}: BlogProps) => {
  return (
    <SectionShell>
      <div className="flex flex-col sm:flex-row justify-center sm:gap-20">
        <p className={`${bigMaker.className} text-9xl text-center scale-200`}>
          {header.title}
        </p>
        <div className="text-center sm:text-left">
          <p className="text-3xl">{header.subtitle}</p>
          <p className="text-xl">{header.tagline}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-2/3">
          <div className="min-w-0 pt-0 lg:pt-2 text-lg">
            {intro.lead.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <ul className="list-disc pl-5 wrap-break-word">
              {intro.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {intro.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <QuoteBlock text={quotes.recurring} />
        </div>
        <Image
          src={intro.image.src}
          alt={intro.image.alt}
          width={intro.image.width}
          height={intro.image.height}
          className="w-full sm:w-1/3 rounded-2xl"
        />
      </div>

      <p className="text-xl text-center py-10">{sections.trendsLead}</p>

      <div className="flex flex-col sm:flex-row gap-10">
        <Image
          src={images.consciousness.src}
          alt={images.consciousness.alt}
          width={images.consciousness.width}
          height={images.consciousness.height}
          className="w-full sm:w-1/3 rounded-2xl"
        />
        <div className="w-full sm:w-2/3">
          <QuoteBlock
            text={quotes.intention}
            className="flex items-start gap-2 text-lg sm:mt-12 sm:text-2xl"
            textClassName="w-fit min-w-0 font-bold"
            endQuoteClassName="mt-8 rotate-180 shrink-0"
          />
          <div className="min-w-0 pt-0 lg:pt-2 text-lg space-y-6">
            {sections.consciousness.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xl text-center py-10">{sections.eraTitle}</p>

      <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-2/3">
          <div className="min-w-0 pt-0 lg:pt-2 text-lg">
            <ul className="list-decimal pl-5 wrap-break-word">
              {sections.eraBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <QuoteBlock text={quotes.recurring} />
        </div>
        <Image
          src={images.era.src}
          alt={images.era.alt}
          width={images.era.width}
          height={images.era.height}
          className="w-full sm:w-1/3 rounded-2xl"
        />
      </div>

      <div className="w-full">
        <div className="min-w-0 pt-0 lg:pt-2 text-lg">
          <p className="text-xl pt-10">{sections.luxuryTitle}</p>
          <p className="text-lg pb-10">{sections.luxurySubtitle}</p>
          <ul className="list-disc pl-5 wrap-break-word">
            {sections.luxuryBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {sections.luxuryClosing.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "py-6" : undefined}>
              {paragraph}
            </p>
          ))}
          <Image
            src={images.author.src}
            alt={images.author.alt}
            width={images.author.width}
            height={images.author.height}
            className="w-56 rounded-2xl ml-auto"
          />
        </div>
      </div>
    </SectionShell>
  );
};
