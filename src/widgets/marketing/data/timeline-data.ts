export type TimelineStage = {
  range: string;
  unit: string;
  items: string[];
  note?: string;
};

export const TIMELINE_HEADER = {
  title: "Timeline",
  subtitle: "DE UNA BODA",
} as const;

export const TIMELINE_IMAGES = [
  {
    src: "/assets/novia1.png",
    alt: "Vestido de novia",
    width: 600,
    height: 900,
    className:
      "absolute left-26 top-[13%] w-[33%] drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)] object-contain",
  },
  {
    src: "/assets/novia2.png",
    alt: "Novia con vestido de boda",
    width: 600,
    height: 900,
    className:
      "absolute left-0 top-[30%] w-[26%] drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)] object-contain",
  },
  {
    src: "/assets/novios3.png",
    alt: "Novia con vestido de boda",
    width: 600,
    height: 900,
    className:
      "absolute right-0 bottom-0 w-[26%] drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)] object-contain",
  },
] as const;

export const TIMELINE_STAGES: TimelineStage[] = [
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

export const TIMELINE_STAGE_LAYOUT = [
  "lg:col-start-4 lg:col-span-9 lg:row-start-2 lg:pt-[2%]",
  "lg:col-start-5 lg:col-span-9 lg:row-start-3 lg:pt-[2%]",
  "lg:col-start-4 lg:col-span-9 lg:row-start-4 lg:pt-[2%]",
  "lg:col-start-3 lg:col-span-9 lg:row-start-5 lg:pt-[2%]",
  "lg:col-start-2 lg:col-span-9 lg:row-start-6 lg:pt-[2%]",
] as const;
