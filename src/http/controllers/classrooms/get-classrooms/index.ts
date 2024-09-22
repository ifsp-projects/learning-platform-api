import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'
import { getClassroomsFactory } from '../../../../factories/classrooms/get-classrooms'

export const getClassrooms = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const useCase = getClassroomsFactory()
    const response = await useCase.execute()
    reply.status(200).send(response)
  } catch (getClassroomsErr) {
    const error = controllerError(getClassroomsErr as Error)

    reply.status(400).send(error)
  }
}
