import { User } from '@prisma/client'

export interface GetUserByIdUseCaseReturn {
  user: User
}
