import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'

import { deleteUserBodySchema } from './schemas'
import { deleteUserFactory } from '../../../../factories/users/delete-user'

export const deleteUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { userId } = deleteUserBodySchema.parse(request.params)

    const useCase = deleteUserFactory()
    const response = await useCase.execute(userId)
    reply.status(200).send(response)
  } catch (deleteUserErr) {
    const error = controllerError(deleteUserErr as Error)

    reply.status(400).send(error)
  }
}
