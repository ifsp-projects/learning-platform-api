import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'
import { getUserByEmailBodySchema } from './schemas'
import { getUserByEmailFactory } from '../../../../factories/users/get-user-by-email'

export const getUserByEmail = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { email } = getUserByEmailBodySchema.parse(request.body)

    const useCase = getUserByEmailFactory()
    const response = await useCase.execute(email)
    reply.status(200).send(response)
  } catch (getUserByEmailErr) {
    const error = controllerError(getUserByEmailErr as Error)

    reply.status(400).send(error)
  }
}
