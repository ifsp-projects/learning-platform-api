import { randomUUID } from 'crypto'
import { prisma } from '../../../lib/prisma'
import { CreateClassroomData } from './types'

export class PrismaClassroomReposiroty {
  createClassroom = async ({
    title,
    description,
    institutionId,
    subject,
    picture,
    background_image,
    teacher_owner
  }: CreateClassroomData) => {
    return await prisma.classroom.create({
      data: {
        id: randomUUID(),
        description: description,
        background_image: background_image,
        institutionId: institutionId,
        picture: picture,
        subject: subject,
        teacher_owner: teacher_owner,
        title: title
      }
    })
  }

  getClassroomById = async (id: string) => {
    return await prisma.classroom.findUnique({
      where: {
        id
      }
    })
  }
}
