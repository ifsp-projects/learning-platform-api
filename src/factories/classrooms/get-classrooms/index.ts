import { PrismaClassroomRepository } from '../../../repositories/prisma/prisma-classroom-repository'
import { GetClassroomByIdUseCase } from '../../../use-cases/classrooms/get-classroom-by-id'
import { GetClassroomsUseCase } from '../../../use-cases/classrooms/get-classrooms'

export const getClassroomsFactory = () => {
  const repository = new PrismaClassroomRepository()
  const useCase = new GetClassroomsUseCase(repository)

  return useCase
}
