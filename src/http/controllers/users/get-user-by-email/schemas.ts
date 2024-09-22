import z from 'zod'

export const getUserByEmailBodySchema = z.object({
  email: z.string()
})
