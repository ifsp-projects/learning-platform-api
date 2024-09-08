import { PrismaClassroomReposiroty } from '../../repositories/prisma/prisma-classroom-repository'
import { CreateClassroomUseCase } from '../../use-cases/classrooms/create-classroom'

export const createClassroomFactory = () => {
  const repository = new PrismaClassroomReposiroty()
  const useCase = new CreateClassroomUseCase(repository)

  return useCase
}
