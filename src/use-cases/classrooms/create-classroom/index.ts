import { PrismaClassroomRepository } from '../../../repositories/prisma/prisma-classroom-repository'
import {
  CreateClassroomUseCasePayload,
  CreateClassroomUseCaseReturn
} from './types'

export class CreateClassroomUseCase {
  constructor(private classroomRepository: PrismaClassroomRepository) {}

  execute = async ({
    title,
    description,
    institutionId,
    subject,
    picture,
    background_image,
    teacher_owner
  }: CreateClassroomUseCasePayload): Promise<CreateClassroomUseCaseReturn> => {
    const classroom = await this.classroomRepository.createClassroom({
      title,
      description,
      institutionId,
      subject,
      picture,
      background_image,
      teacher_owner
    })

    return {
      classroom
    }
  }
}
