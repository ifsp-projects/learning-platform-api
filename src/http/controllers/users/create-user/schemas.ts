import z from 'zod'

export const createUserBodySchema = z.object({
  email: z.string(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string()
})
