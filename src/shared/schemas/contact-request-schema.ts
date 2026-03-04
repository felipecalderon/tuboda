import { z } from "zod";

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
  contactEmail: "",
  contactPhone: "",
  notes: "",
};
