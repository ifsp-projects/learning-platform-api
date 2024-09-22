import { User } from '@prisma/client'
import { CreateUserData } from '../../../repositories/prisma/prisma-user-repository/types'

export interface CreateUserUseCasePayload extends CreateUserData {}

export interface CreateUserUseCaseReturn {
  user: User
}
