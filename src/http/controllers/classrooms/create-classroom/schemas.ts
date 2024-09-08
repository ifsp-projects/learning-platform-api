import z from 'zod'

export const createClassRoomBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  institutionId: z.string(),
  subject: z.string(),
  picture: z.string(),
  background_image: z.string(),
  teacher_owner: z.string()
})
