import { z } from "zod";

export const mentorProfileSchema = z.object({
  fullname: z.string().min(2, "Le nom complet est requis."),
  email: z.string().min(1, "L'email est requis.").email("Le format de l'email est invalide."),
  phone: z.string().optional().refine(
    (val) => !val || /^(\+33|0)[1-9](\d{2}){4}$/.test(val),
    { message: "Le téléphone doit être au format français, ex: 0612345678 ou +33612345678." }
  ),
  // Add other fields as needed
});

export const menteeProfileSchema = z.object({
  fullname: z.string().min(2, "Le nom complet est requis."),
  email: z.string().min(1, "L'email est requis.").email("Le format de l'email est invalide."),
  phone: z.string().optional().refine(
    (val) => !val || /^(\+33|0)[1-9](\d{2}){4}$/.test(val),
    { message: "Le téléphone doit être au format français, ex: 0612345678 ou +33612345678." }
  ),
  title: z.string().min(2, "Le titre/grade est trop court.").optional(),
  // Add other fields as needed
});
