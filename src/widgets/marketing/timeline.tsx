import Image from "next/image";
import { bigMaker } from "../../../app/fonts";

type Stage = {
  range: string; // "12 a 9"
  unit: string; // "MESES"
  items: string[];
  note?: string;
};

const stagesTop: Stage[] = [
  {
    range: "12 a 9",
    unit: "MESES",
    items: [
      "Definir presupuesto real",
      "Elegir fecha",
      "Reservar lugar de ceremonia y celebración",
      "Contratar banquetería",
      "Reservar fotógrafo y video",
      "Comenzar búsqueda de vestido traje Novio",
    ],
    note: "Si esta etapa se hace bien, todo fluye.",
  },
  {
    range: "9 a 6",
    unit: "MESES",
    items: [
      "Definir concepto y estilo",
      "Contratar decoración y diseño floral",
      "Confirmar música / DJ / banda",
      "Reservar maquillaje y peinado",
      "Avanzar en lista preliminar de invitados",
      "Elegir vestido (si no lo hiciste antes)",
    ],
    note: "Este es el momento donde la inspiración se convierte en realidad.",
  },
  {
    range: "6 a 3",
    unit: "MESES",
    items: [
      "Definir menú final",
      "Elegir argollas",
      "Mandar invitaciones",
      "Coordinar trajes del novio",
      "Confirmar mobiliario y detalles",
      "Agendar pruebas de vestido",
    ],
    note: "Aquí se evitan improvisaciones.",
  },
  {
    range: "3 a 1",
    unit: "MESES",
    items: [
      "Confirmar número final de invitados",
      "Revisar timing del día",
      "Confirmar pagos",
      "Hacer última prueba de vestido",
      "Coordinar horarios DE Los proveedores",
    ],
    note: "La organización ahora se vuelve logística.",
  },
  {
    range: "1 Mes",
    unit: "",
    items: [
      "Delegar responsabilidades",
      "Preparar kit de emergencia",
      "Descansar",
      "Disfrutar el proceso",
    ],
    note: "La tranquilidad es parte del look de novia.",
  },
];

export function Timeline() {
  return (
    <section className="w-full bg-white">
      {/* “Lienzo” con proporción similar a tu PSD */}
      <div className="relative mx-auto w-full overflow-hidden bg-white">
        {/* Franja inferior */}
        <div className="absolute inset-x-0 bottom-0 h-[34%]" />

        {/* Capa imágenes */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Image
            src="/assets/novia1.png"
            alt="Vestido de novia"
            width={600}
            height={900}
            className="
              absolute left-26 top-[13%] w-[33%]
              drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]
              object-contain
            "
          />
          <Image
            src="/assets/novia2.png"
            alt="Novia con vestido de boda"
            width={600}
            height={900}
            className="
              absolute left-0 top-[30%] w-[26%]
              drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]
              object-contain
            "
          />
          <Image
            src="/assets/novios3.png"
            alt="Novia con vestido de boda"
            width={600}
            height={900}
            className="
              absolute right-0 bottom-0 w-[26%]
              drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]
              object-contain
            "
          />
        </div>

        {/* Contenido en grid */}
        <div className="relative z-10 h-full px-[5%] py-20">
          <div className="grid h-full grid-cols-12 grid-rows-[auto_1fr_1fr_1fr] gap-x-6">
            {/* Título */}
            <header className="col-start-4 col-span-9 pt-[6%] text-center">
              <div className={`${bigMaker.className} text-9xl scale-200`}>
                Timeline
              </div>
              <div className="text-5xl -mt-6">DE UNA BODA</div>
            </header>

            {/* Bloques superiores */}
            <div className="col-start-4 col-span-9 row-start-2 self-start pt-[2%]">
              <StageRow stage={stagesTop[0]} />
            </div>

            <div className="col-start-5 col-span-9 row-start-3 self-start pt-[2%]">
              <StageRow stage={stagesTop[1]} />
            </div>

            <div className="col-start-4 col-span-9 row-start-4 self-start pt-[2%]">
              <StageRow stage={stagesTop[2]} />
            </div>

            <div className="col-start-3 col-span-9 row-start-5 self-start pt-[2%]">
              <StageRow stage={stagesTop[3]} />
            </div>

            <div className="col-start-2 col-span-9 row-start-6 self-start pt-[2%]">
              <StageRow stage={stagesTop[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageRow({ stage, bottom }: { stage: Stage; bottom?: boolean }) {
  return (
    <div className="grid grid-cols-[220px_1fr] items-start gap-x-10">
      {/* Columna rango */}
      <div className="text-center">
        <div className={`${bigMaker.className} text-[clamp(60px,6vw,100px)]`}>
          {stage.range}
        </div>
        <div className="text-[clamp(12px,1.2vw,16px)] -mt-10">{stage.unit}</div>
      </div>

      {/* Columna bullets */}
      <div className="pt-2">
        <ul
          className="
            list-disc pl-5
            font-serif text-[#3a2a24]
            text-[clamp(12px,1.05vw,15px)]
            leading-[1.55]
          "
        >
          {stage.items.map((t) => (
            <li key={t}>{t}</li>
          ))}
          {stage.note && <li className="mt-2 italic">{stage.note}</li>}
        </ul>
      </div>
    </div>
  );
}
