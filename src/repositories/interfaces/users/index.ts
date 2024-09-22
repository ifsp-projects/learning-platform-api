import { User } from '@prisma/client'

import { CreateUserData } from '../../prisma/prisma-user-repository/types'

export interface UsersRepository {
  createUser: ({
    email,
    firstname,
    lastname,
    password
  }: CreateUserData) => Promise<User>
  getUserById: (userId: string) => Promise<User>
  getUsers: () => Promise<User[]>
  deleteUser: (userId: string) => Promise<void>
}
