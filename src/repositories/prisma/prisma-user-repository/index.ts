import { randomUUID } from 'crypto'
import { prisma } from '../../../lib/prisma'
import { CreateUserData } from './types'

export class PrismaUserRepository {
  createUser = async ({
    email,
    firstname,
    lastname,
    password
  }: CreateUserData) => {
    return await prisma.user.create({
      data: {
        id: randomUUID(),
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
        role: 'student'
      }
    })
  }

  getAllUsers = async () => {
    return await prisma.user.findMany()
  }

  getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }

  deleteUser = async (userId: string) => {
    return await prisma.user.delete({
      where: {
        id: userId
      }
    })
  }
}
