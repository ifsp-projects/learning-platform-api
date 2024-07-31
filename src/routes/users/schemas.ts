import z from "zod";

export const createUserSchema = {
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    created_at: z.coerce.date()
  })
}
