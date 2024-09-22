import { PrismaClassroomRepository } from '../../../repositories/prisma/prisma-classroom-repository'
import { GetClassroomsUseCaseReturn } from './types'

export class GetClassroomsUseCase {
  constructor(private classroomRepository: PrismaClassroomRepository) {}

  execute = async (): Promise<GetClassroomsUseCaseReturn> => {
    const classrooms = await this.classroomRepository.getAllClassrooms()

    return {
      classrooms
    }
  }
}
