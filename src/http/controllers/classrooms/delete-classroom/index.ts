import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'

import { deleteClassRoomBodySchema } from './schemas'
import { deleteClassroomFactory } from '../../../../factories/classrooms/delete-classroom-factory'

export const deleteClassroom = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { classroomId } = deleteClassRoomBodySchema.parse(request.params)

    const useCase = deleteClassroomFactory()
    const response = await useCase.execute(classroomId)
    reply.status(200).send(response)
  } catch (deleteClassroomErr) {
    const error = controllerError(deleteClassroomErr as Error)

    reply.status(400).send(error)
  }
}
