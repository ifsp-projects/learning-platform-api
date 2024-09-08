import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'

import { getClassRoomByIdBodySchema } from './schemas'
import { getClassroomByIdFactory } from '../../../../factories/classrooms/get-classroom-by-id'

export const getClassroomById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { classroomId } = getClassRoomByIdBodySchema.parse(request.body)

    const useCase = getClassroomByIdFactory()
    const response = await useCase.execute(classroomId)
    reply.status(200).send(response)
  } catch (getClassroomByIdErr) {
    const error = controllerError(getClassroomByIdErr as Error)

    reply.status(400).send(error)
  }
}
