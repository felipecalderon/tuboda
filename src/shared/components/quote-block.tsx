import { BsQuote } from "react-icons/bs";

type QuoteBlockProps = {
  text: string;
  className?: string;
  textClassName?: string;
  endQuoteClassName?: string;
};

export function QuoteBlock({
  text,
  className = "mt-8 flex items-start gap-2 text-lg sm:mt-12 sm:text-2xl",
  textClassName = "w-fit min-w-0",
  endQuoteClassName = "mt-8 rotate-180 shrink-0 sm:mt-14",
}: QuoteBlockProps) {
  return (
    <div className={className}>
      <BsQuote className="shrink-0" />
      <p className={textClassName}>{text}</p>
      <BsQuote className={endQuoteClassName} />
    </div>
  );
}
