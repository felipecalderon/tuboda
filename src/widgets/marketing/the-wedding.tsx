import { ContactRequestForm } from "@/shared/ui/contact-request-form";
import { LogoTuBoda } from "@/shared/ui/logo-tuboda";
import { THE_WEDDING_CONTENT } from "@/widgets/marketing/data/the-wedding-data";
import type { ReactNode } from "react";
import { bigMaker } from "../../../app/fonts";
import { QuoteBlock } from "../../shared/components/quote-block";

type TheWeddingContent = {
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  quote: string;
};

type TheWeddingComponentProps = {
  id?: string;
  content?: TheWeddingContent;
  logoSlot?: ReactNode;
  formSlot?: ReactNode;
};

export const TheWeddingComponent = ({
  id = "the-wedding",
  content = THE_WEDDING_CONTENT,
  logoSlot = <LogoTuBoda />,
  formSlot = <ContactRequestForm />,
}: TheWeddingComponentProps) => {
  return (
    <section
      id={id}
      className="mx-auto flex w-full max-w-6xl scroll-mt-24 flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="w-full lg:w-7/12">
        <p
          className={`${bigMaker.className} text-[clamp(3rem,18vw,9rem)] leading-none`}
        >
          {content.titlePrimary}
        </p>
        <p className="pb-6 text-[clamp(1.8rem,9vw,3.6rem)] leading-none sm:pb-8">
          {content.titleSecondary}
        </p>
        <p className="text-sm font-serif leading-relaxed sm:text-base">
          {content.description}
        </p>
        <QuoteBlock
          text={content.quote}
          className="mt-8 flex items-start gap-2 text-lg leading-tight sm:mt-12 sm:text-2xl"
          endQuoteClassName="mt-8 rotate-180 shrink-0 sm:mt-14"
        />
      </div>
      <div className="w-full lg:w-5/12">
        {logoSlot}
        <div className="mt-4 sm:mt-6">{formSlot}</div>
      </div>
    </section>
  );
};
