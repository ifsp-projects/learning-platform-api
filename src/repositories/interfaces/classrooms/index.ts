import { Classroom, Prisma } from '@prisma/client'

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
  getClassroomById: (id: string) => Promise<Classroom | null>
}
