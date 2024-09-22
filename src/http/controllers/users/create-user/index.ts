import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'
import { createUserBodySchema } from './schemas'
import { createUserFactory } from '../../../../factories/users/create-user-factory'

export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { email, firstname, lastname, password } = createUserBodySchema.parse(
      request.body
    )

    const useCase = createUserFactory()
    const response = await useCase.execute({
      email,
      firstname,
      lastname,
      password
    })
    reply.status(200).send(response)
  } catch (createUserErr) {
    const error = controllerError(createUserErr as Error)

    reply.status(400).send(error)
  }
}
