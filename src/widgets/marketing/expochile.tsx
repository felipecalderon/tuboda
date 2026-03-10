import { bigMaker } from "../../../app/fonts";
import { SectionShell } from "./components/section-shell";
import { EXPO_CHILE_CONTENT } from "./data/expo-chile-data";

type ExpoChileProps = {
  content?: typeof EXPO_CHILE_CONTENT;
};

export const ExpoChile = ({ content = EXPO_CHILE_CONTENT }: ExpoChileProps) => {
  return (
    <SectionShell className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 space-y-10 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-center sm:gap-20">
        <div className="text-center">
          <p className="text-8xl uppercase">{content.title}</p>
          <p className={`${bigMaker.className} text-9xl text-amber-600 scale-200`}>
            {content.highlight}
          </p>
        </div>
      </div>
    </SectionShell>
  );
};
