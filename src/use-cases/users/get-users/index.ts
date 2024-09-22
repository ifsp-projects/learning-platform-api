import { PrismaUserRepository } from "../../../repositories/prisma/prisma-user-repository"
import { GetUsersUseCaseReturn } from "./types"

export class GetUsersUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  execute = async (): Promise<GetUsersUseCaseReturn> => {
    const users = await this.userRepository.getAllUsers()

    return {
      users
    }
  }
}
