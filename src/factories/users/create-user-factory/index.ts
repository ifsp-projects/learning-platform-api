
import { PrismaUserRepository } from '../../../repositories/prisma/prisma-user-repository'
import { CreateUserUseCase } from '../../../use-cases/users/create-user'

export const createUserFactory = () => {
  const repository = new PrismaUserRepository()
  const useCase = new CreateUserUseCase(repository)

  return useCase
}
