import { PrismaClassroomRepository } from '../../../repositories/prisma/prisma-classroom-repository'
import { DeleteClassroomUseCase } from '../../../use-cases/classrooms/delete-classroom'

export const deleteClassroomFactory = () => {
  const repository = new PrismaClassroomRepository()
  const useCase = new DeleteClassroomUseCase(repository)

  return useCase
}
