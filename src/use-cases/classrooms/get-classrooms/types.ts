import { Classroom } from '@prisma/client'

export interface GetClassroomsUseCaseReturn {
  classrooms: Classroom[]
}
