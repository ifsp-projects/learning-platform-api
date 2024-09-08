import { FastifyRequest, FastifyReply } from 'fastify'
import jwt from '@fastify/jwt'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.status(401).send({
      message: 'Unauthorized'
    })
  }
}
