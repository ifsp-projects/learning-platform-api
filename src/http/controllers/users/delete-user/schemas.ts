import z from 'zod'

export const deleteUserBodySchema = z.object({
  userId: z.string()
})
