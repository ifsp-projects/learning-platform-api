import z from 'zod'

export const getClassRoomByIdBodySchema = z.object({
  classroomId: z.string()
})
