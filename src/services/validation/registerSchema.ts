// services/validation/registerSchema.ts
import { z } from "zod";

export const registerSchema = z
    .object({
        fullName: z.string().min(1, "Le nom complet est requis."),
        email: z.string().email("Adresse e-mail invalide."),
        password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères."),
        confirmPassword: z.string().min(8, "La confirmation est requise."),
        role: z.enum(["mentor", "mentee"]),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas.",
        path: ["confirmPassword"],
    });
