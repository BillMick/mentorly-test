// validation/loginSchema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Adresse e-mail invalide."),
  password: z.string().min(1, "Le mot de passe est requis."),
});
