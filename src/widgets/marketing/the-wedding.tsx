import { ContactRequestForm } from "@/shared/ui/contact-request-form";
import { bigMaker } from "../../../app/fonts";
import { BsQuote } from "react-icons/bs";

export const TheWeddingComponent = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:gap-16">
      <div className="w-full lg:w-7/12">
        <p
          className={`${bigMaker.className} text-[clamp(3rem,18vw,9rem)] leading-none`}
        >
          The
        </p>
        <p className="pb-6 text-[clamp(1.8rem,9vw,3.6rem)] leading-none sm:pb-8">
          Wedding
        </p>
        <p className="text-sm font-serif leading-relaxed sm:text-base">
          Somos el evento presencial de Bodas mas destacado de Chile. Por 12
          años hemos reunido a las empresas, con todos los Novios de la
          Temporada de Bodas en nuestro pais. Creamos esta plataforma online
          para reunir a todas las empresas con trayectoria y puedas encontrar
          todos los servicios que necesita TU BODA en un solo lugar.
        </p>
        <div className="mt-8 flex items-start gap-2 text-lg leading-tight sm:mt-12 sm:text-2xl">
          <BsQuote />
          <span>Planifica TU BODA con las empresas verificadas</span>
          <BsQuote className="mt-8 rotate-180 sm:mt-14" />
        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <p className="text-left text-3xl leading-none sm:text-right sm:text-4xl">
          TU BODA
        </p>
        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-600 flex-1" />
          <span className="text-sm">EXPO CHILE</span>
        </div>
        <div className="mt-4 sm:mt-6">
          <ContactRequestForm />
        </div>
      </div>
    </section>
  );
};
