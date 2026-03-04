import { z } from "zod";

export const eventTypeSchema = z.object({
  modalidad: z.enum(["online", "presencial"], {
    error: "Debes seleccionar una modalidad",
  }),
  name: z.string().trim().min(2, "Ingresa el nombre de tu empresa."),
  contactEmail: z.string().email("Ingresa un correo electrónico válido."),
  contactPhone: z.string().trim().min(8, "Ingresa un teléfono de contacto."),
  city: z.string().trim().min(2, "Indica la ciudad o comuna de tu empresa."),
});

export type EventTypeFormValues = z.infer<typeof eventTypeSchema>;
export const businessRequestDefaultValues: EventTypeFormValues = {
  modalidad: "online",
  name: "",
  contactEmail: "",
  contactPhone: "",
  city: "",
};
