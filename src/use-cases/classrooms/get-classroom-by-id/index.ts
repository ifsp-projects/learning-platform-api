import { PrismaClassroomRepository } from '../../../repositories/prisma/prisma-classroom-repository'
import { GetClassroomByIdUseCaseReturn } from './types'

export class GetClassroomByIdUseCase {
  constructor(private classroomRepository: PrismaClassroomRepository) {}

  execute = async (
    classroomId: string
  ): Promise<GetClassroomByIdUseCaseReturn> => {
    const classroom = await this.classroomRepository.getClassroomById(
      classroomId
    )

    return {
      //@ts-expect-error
      classroom
    }
  }
}
