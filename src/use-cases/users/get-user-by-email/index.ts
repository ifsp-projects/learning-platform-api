import { PrismaUserRepository } from "../../../repositories/prisma/prisma-user-repository"
import { GetUserByIdUseCaseReturn } from "./types"


export class GetUserByIdUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  execute = async (
    email: string
  ): Promise<GetUserByIdUseCaseReturn> => {
    const user = await this.userRepository.getUserByEmail(email)

    return {
      //@ts-expect-error
      user
    }
  }
}
