import { PrismaUserRepository } from '../../../repositories/prisma/prisma-user-repository'
import { CreateUserUseCasePayload, CreateUserUseCaseReturn } from './types'

export class CreateUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  execute = async ({
    email,
    firstname,
    lastname,
    password
  }: CreateUserUseCasePayload): Promise<CreateUserUseCaseReturn> => {
    const user = await this.userRepository.createUser({
      email,
      firstname,
      lastname,
      password
    })

    return {
      user
    }
  }
}
