import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { createUserSchema } from './schemas'

export const createUser = async (app: FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/user/create',
    {
      schema: createUserSchema
    },
    async request => {
      return
    }
  )
}
