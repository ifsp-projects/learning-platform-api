import { PrismaUserRepository } from '../../../repositories/prisma/prisma-user-repository'
import { GetUsersUseCase } from '../../../use-cases/users/get-users'

export const getUsersFactory = () => {
  const repository = new PrismaUserRepository()
  const useCase = new GetUsersUseCase(repository)

  return useCase
}
