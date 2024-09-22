import fastify from 'fastify'

import fastifyCookie from '@fastify/cookie'
import fastifyJwt from '@fastify/jwt'

import { env } from './constants/env'
import { usersRoutes } from './http/routes/users-routes'
import { classroomsRoutes } from './http/routes/classrooms-routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false
  },
  sign: {
    expiresIn: '10m'
  }
})
app.register(fastifyCookie)

app.register(classroomsRoutes)
app.register(usersRoutes)
