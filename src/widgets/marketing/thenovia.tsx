import Image from "next/image";
import { bigMaker } from "../../../app/fonts";
import { SOY_NOVIA_CONTENT } from "./data/soy-novia-data";

type SoyNoviaProps = {
  content?: typeof SOY_NOVIA_CONTENT;
};

export const SoyNovia = ({ content = SOY_NOVIA_CONTENT }: SoyNoviaProps) => {
  return (
    <div className="py-10 overflow-hidden">
      <p className={`${bigMaker.className} text-9xl text-center scale-200`}>
        {content.title}
      </p>
      <p className="text-3xl text-center">{content.subtitle}</p>
      <Image
        src={content.image.src}
        alt={content.image.alt}
        width={content.image.width}
        height={content.image.height}
        className="mx-auto"
      />
    </div>
  );
};
