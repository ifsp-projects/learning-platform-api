import z from 'zod'

export const deleteClassRoomBodySchema = z.object({
  classroomId: z.string()
})
