import { z } from "zod";

const budgetRangeValues = ["hasta-2m", "2m-5m", "5m-10m", "mas-10m"] as const;
const ceremonyTypeValues = ["civil", "religiosa", "simbolica", "mixta"] as const;

export const budgetRangeOptions = [
  { value: "hasta-2m", label: "Hasta CLP 2.000.000" },
  { value: "2m-5m", label: "CLP 2.000.000 a 5.000.000" },
  { value: "5m-10m", label: "CLP 5.000.000 a 10.000.000" },
  { value: "mas-10m", label: "Mas de CLP 10.000.000" },
] as const;

export const ceremonyTypeOptions = [
  { value: "civil", label: "Civil" },
  { value: "religiosa", label: "Religiosa" },
  { value: "simbolica", label: "Simbolica" },
  { value: "mixta", label: "Mixta" },
] as const;

export const contactRequestSchema = z.object({
  brideName: z.string().trim().min(2, "Ingresa el nombre de la novia."),
  groomName: z.string().trim().min(2, "Ingresa el nombre del novio."),
  weddingDate: z.string().min(1, "Selecciona la fecha del matrimonio."),
  city: z.string().trim().min(2, "Indica la ciudad o comuna del evento."),
  guestCount: z
    .number({ error: "Ingresa una cantidad valida de invitados." })
    .int("Debe ser un numero entero.")
    .min(20, "La cantidad minima sugerida es 20 invitados.")
    .max(1000, "La cantidad maxima permitida es 1000 invitados."),
  budgetRange: z.enum(budgetRangeValues, "Selecciona un rango de presupuesto."),
  ceremonyType: z.enum(ceremonyTypeValues, "Selecciona el tipo de ceremonia."),
  contactEmail: z
    .string()
    .trim()
    .email("Ingresa un correo valido para contactarte."),
  contactPhone: z.string().trim().min(8, "Ingresa un telefono de contacto."),
  notes: z
    .string()
    .trim()
    .max(500, "El mensaje no puede superar 500 caracteres.")
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactRequestSchema>;

export const contactRequestDefaultValues: ContactFormValues = {
  brideName: "",
  groomName: "",
  weddingDate: "",
  city: "",
  guestCount: 120,
  budgetRange: "2m-5m",
  ceremonyType: "civil",
  contactEmail: "",
  contactPhone: "",
  notes: "",
};
