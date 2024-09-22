import { randomUUID } from 'crypto'
import { prisma } from '../../../lib/prisma'
import { CreateClassroomData } from './types'

export class PrismaClassroomRepository {
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

  getAllClassrooms = async () => {
    return await prisma.classroom.findMany()
  }

  getClassroomById = async (classroomId: string) => {
    return await prisma.classroom.findUnique({
      where: {
        id: classroomId
      }
    })
  }

  deleteClassroom = async (classroomId: string) => {
    return await prisma.classroom.delete({
      where: {
        id: classroomId
      }
    })
  }
}
