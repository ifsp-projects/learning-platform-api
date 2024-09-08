import { ClassroomsRepository } from '../../../repositories/interfaces/classrooms'
import {
  CreateClassroomUseCasePayload,
  CreateClassroomUseCaseReturn
} from './types'

export class CreateClassroomUseCase {
  constructor(private classroomReposirory: ClassroomsRepository) {}

  execute = async ({
    title,
    description,
    institutionId,
    subject,
    picture,
    background_image,
    teacher_owner
  }: CreateClassroomUseCasePayload): Promise<CreateClassroomUseCaseReturn> => {
    const classroom = await this.classroomReposirory.createClassroom({
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
