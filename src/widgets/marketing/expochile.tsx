import { bigMaker } from "../../../app/fonts";

export const ExpoChile = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 space-y-10 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-center sm:gap-20">
        <div className="text-center">
          <p className="text-8xl uppercase">Tu Boda Expo Chile</p>
          <p
            className={`${bigMaker.className} text-9xl text-amber-600 scale-200`}
          >
            Online
          </p>
        </div>
      </div>
    </div>
  );
};
