import { PrismaClassroomRepository } from '../../../repositories/prisma/prisma-classroom-repository'
import { GetClassroomByIdUseCase } from '../../../use-cases/classrooms/get-classroom-by-id'

export const getClassroomByIdFactory = () => {
  const repository = new PrismaClassroomRepository()
  const useCase = new GetClassroomByIdUseCase(repository)

  return useCase
}
