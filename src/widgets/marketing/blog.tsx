import { BsQuote } from "react-icons/bs";
import { bigMaker } from "../../../app/fonts";
import Image from "next/image";
import { EventLogo } from "@/shared/ui/event-logo";
import { events } from "@/shared/config/events";
import { Events } from "./events";

export const Blog = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 space-y-10 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row justify-center sm:gap-20">
        <p className={`${bigMaker.className} text-9xl text-center scale-200`}>
          Blog
        </p>
        <div className="text-center sm:text-left">
          <p className={`text-3xl`}>La Novia de hoy:</p>
          <p className={`text-xl`}>El nuevo lujo</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-2/3">
          <div className="min-w-0 pt-0 lg:pt-2 text-lg">
            <p>Quién es la Novia de Hoy?</p>
            <p>Es una novia que:</p>
            <ul className="list-disc pl-5 wrap-break-word">
              <li>Prioriza la calidad por sobre la cantidad</li>
              <li>Entiende que el lujo está en los detalles</li>
              <li>Se ve elegante sin esfuerzo</li>
              <li>No necesita aprobación, confía en su criterio</li>
            </ul>
            <p>La Novia de Hoy no grita tendencia</p>
            <p>La encarna</p>
          </div>
          <div className="mt-8 flex items-start gap-2 text-lg sm:mt-12 sm:text-2xl">
            <BsQuote className="shrink-0" />
            <p className="w-fit min-w-0">
              Una serie creada para novias que no siguen tendencias, las
              interpretan con criterio, estilo y decisión.
            </p>
            <BsQuote className="mt-8 rotate-180 shrink-0 sm:mt-14" />
          </div>
        </div>
        <Image
          src="/assets/blog1.jpg"
          alt="Novia del blog"
          width={500}
          height={900}
          className="w-full sm:w-1/3 rounded-2xl"
        />
      </div>
      <p className="text-xl text-center py-10">
        Las tendencias para novias 2026 apuntan a una estética más consciente y
        refinada, menos exceso, más intención. En esta guía te mostramos los
        estilos que están marcando el rumbo de la nueva temporada.
      </p>
      <div className="flex flex-col sm:flex-row gap-10">
        <Image
          src="/assets/blog2.jpg"
          alt="Novia del blog"
          width={500}
          height={900}
          className="w-full sm:w-1/3 rounded-2xl"
        />
        <div className="w-full sm:w-2/3">
          <div className="flex items-start gap-2 text-lg sm:mt-12 sm:text-2xl">
            <BsQuote className="shrink-0" />
            <p className="w-fit min-w-0 font-bold">
              Menos exceso, más intención
            </p>
            <BsQuote className="mt-8 rotate-180 shrink-0" />
          </div>
          <div className="min-w-0 pt-0 lg:pt-2 text-lg space-y-6">
            <p>La novia de hoy ya no busca impresionar.</p>
            <p>
              Busca sentirse representada. Atrás quedaron los looks
              sobrecargados, las decisiones impulsivas y las bodas que se
              parecen a todas.
            </p>
            <p>
              La nueva novia es consciente, informada y segura. No elige por
              moda, elige por coherencia.
            </p>
            <p>
              Esta temporada marca un antes y un después en la estética nupcial:
              menos exceso, más intención.
            </p>
          </div>
        </div>
      </div>
      <p className="text-xl text-center py-10">
        La estética que define esta nueva era bridal
      </p>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-2/3">
          <div className="min-w-0 pt-0 lg:pt-2 text-lg">
            <ul className="list-decimal pl-5 wrap-break-word">
              <li>
                Belleza real, no artificial Piel luminosa, maquillajes que
                realzan sin transformar. El objetivo ya no es “verse producida”,
                sino verse auténtica y pulida.
              </li>
              <li>
                Peinados con intención Moños bajos, ondas suaves, texturas
                controladas. Nada está fuera de lugar, pero nada se ve rígido.
              </li>
              <li>
                Vestidos que hablan de la novia, no del diseñador Cortes
                limpios, siluetas claras, telas nobles. Vestidos que envejecen
                bien en el recuerdo y en las fotos.
              </li>
            </ul>
          </div>
          <div className="mt-8 flex items-start gap-2 text-lg sm:mt-12 sm:text-2xl">
            <BsQuote className="shrink-0" />
            <p className="w-fit min-w-0">
              Una serie creada para novias que no siguen tendencias, las
              interpretan con criterio, estilo y decisión.
            </p>
            <BsQuote className="mt-8 rotate-180 shrink-0 sm:mt-14" />
          </div>
        </div>
        <Image
          src="/assets/blog3.png"
          alt="Novia del blog"
          width={488}
          height={1000}
          className="w-full sm:w-1/3 rounded-2xl"
        />
      </div>
      <div className="w-full">
        <div className="min-w-0 pt-0 lg:pt-2 text-lg">
          <p className="text-xl pt-10">El nuevo lujo en las Bodas</p>
          <p className="text-lg pb-10">El lujo hoy no es exceso, es:</p>
          <ul className="list-disc pl-5 wrap-break-word">
            <li>Tiempo bien invertido</li>
            <li>Proveedores correctos</li>
            <li>Decisiones tomadas con calma</li>
            <li>Una estética que se siente natural</li>
          </ul>
          <p className="py-6">
            Las bodas más elegantes no son las más grandes, son las mejor
            pensadas.
          </p>
          <p>
            Después de años en la industria, hay algo claro: las bodas que
            realmente funcionan no siguen todas las tendencias, siguen una línea
            clara desde el inicio. Cuando una novia entiende quién es y qué
            quiere transmitir, todo fluye: el vestido, la decoración, la música,
            la experiencia. Ese es el verdadero secreto de una boda bien
            lograda.
          </p>
          <Image
            src="/assets/javieradiaz.png"
            alt="Novia del blog"
            width={400}
            height={600}
            className="w-56 rounded-2xl ml-auto"
          />
        </div>
      </div>
      <Events />
    </div>
  );
};
