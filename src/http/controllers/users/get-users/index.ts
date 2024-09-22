import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'
import { getUsersFactory } from '../../../../factories/users/get-users'

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const useCase = getUsersFactory()
    const response = await useCase.execute()
    reply.status(200).send(response)
  } catch (getUsersErr) {
    const error = controllerError(getUsersErr as Error)

    reply.status(400).send(error)
  }
}
