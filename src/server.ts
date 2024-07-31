import fastify from 'fastify'
import validateCorsOrigin from './middlewares/validateCorsOrigin'
import { createUser } from './routes/users'

const app = fastify()

app.register(createUser)

app.addHook('preHandler', (request, reply, done) => {
  request.body = request.body || {}
  done()
})

app.addHook('onRequest', (request, reply, done) => {
  validateCorsOrigin
  done()
})

app.listen({ port: 3333 })
