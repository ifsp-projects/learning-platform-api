import { PrismaUserRepository } from '../../../repositories/prisma/prisma-user-repository'
import { DeleteUserUseCase } from '../../../use-cases/users/delete-user'

export const deleteUserFactory = () => {
  const repository = new PrismaUserRepository()
  const useCase = new DeleteUserUseCase(repository)

  return useCase
}
