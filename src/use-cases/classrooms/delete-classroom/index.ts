import { PrismaClassroomRepository } from '../../../repositories/prisma/prisma-classroom-repository'

export class DeleteClassroomUseCase {
  constructor(private classroomRepository: PrismaClassroomRepository) {}

  execute = async (classroomId: string): Promise<void> => {
    await this.classroomRepository.deleteClassroom(
      classroomId
    )
  }
}
