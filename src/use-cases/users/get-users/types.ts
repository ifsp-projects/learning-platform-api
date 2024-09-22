import { User } from '@prisma/client'

export interface GetUsersUseCaseReturn {
  users: User[]
}
