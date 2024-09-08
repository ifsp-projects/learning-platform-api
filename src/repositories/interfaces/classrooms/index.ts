import { Classroom } from '@prisma/client'

import { CreateClassroomData } from '../../prisma/prisma-classroom-repository/types'

export interface ClassroomsRepository {
  createClassroom: ({
    title,
    description,
    institutionId,
    subject,
    picture,
    background_image,
    teacher_owner
  }: CreateClassroomData) => Promise<Classroom>
  getClassroomById: (classroomId: string) => Promise<Classroom>
  deleteClassroom: (classroomId: string) => Promise<void>
}
