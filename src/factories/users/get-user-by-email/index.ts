import { PrismaUserRepository } from '../../../repositories/prisma/prisma-user-repository'
import { GetUserByIdUseCase } from '../../../use-cases/users/get-user-by-email'

export const getUserByEmailFactory = () => {
  const repository = new PrismaUserRepository()
  const useCase = new GetUserByIdUseCase(repository)

  return useCase
}
