import { PrismaUserRepository } from '../../../repositories/prisma/prisma-user-repository'

export class DeleteUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  execute = async (userId: string): Promise<void> => {
    await this.userRepository.deleteUser(userId)
  }
}
