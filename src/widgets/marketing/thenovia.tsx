import Image from "next/image";
import { bigMaker } from "../../../app/fonts";

export const SoyNovia = () => {
  return (
    <div className="py-10 overflow-hidden">
      <p className={`${bigMaker.className} text-9xl text-center scale-200`}>
        Soy Novia
      </p>
      <p className={`text-3xl text-center`}>Editorial tu boda</p>
      <Image
        src="/assets/novia-magazine.png"
        alt="Portada de novia - Revista"
        className="mx-auto"
        width={800}
        height={800}
      />
    </div>
  );
};
