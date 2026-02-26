import { ContactRequestForm } from "@/shared/ui/contact-request-form";
import { bigMaker } from "../../../app/fonts";
import { BsQuote } from "react-icons/bs";

export const TheWeddingComponent = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-row justify-between">
      <div className="max-w-1/2">
        <p className={`${bigMaker.className} text-9xl`}>The</p>
        <p className="text-5xl -mt-10 pb-10">Wedding</p>
        <p className="text-lg">
          Somos el evento presencial de Bodas mas destacado de Chile. Por 12
          años hemos reunido a las empresas, con todos los Novios de la
          Temporada de Bodas en nuestro pais. Creamos esta plataforma online
          para reunir a todas las empresas con trayectoria y puedas encontrar
          todos los servicios que necesita TU BODA en un solo lugar.
        </p>
        <div className="text-2xl mt-20 flex">
          <BsQuote />
          <span className="text-center">
            Planifica TU BODA con las empresas verificadas
          </span>
          <BsQuote className="rotate-180 mt-14" />
        </div>
      </div>
      <div className="w-1/3">
        <p className="text-right text-4xl">TU BODA</p>
        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-600 flex-1" />
          <span className="text-sm">EXPO CHILE</span>
        </div>
        <div>
          <ContactRequestForm />
        </div>
      </div>
    </div>
  );
};
