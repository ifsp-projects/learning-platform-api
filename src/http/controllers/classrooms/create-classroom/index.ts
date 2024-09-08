import { FastifyReply, FastifyRequest } from 'fastify'
import { controllerError } from '../../../../utils/controllers/controller-error'
import { createClassRoomBodySchema } from './schemas'
import { createClassroomFactory } from '../../../../factories/create-classroom-factory'

export const createClassroom = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const {
      title,
      description,
      institutionId,
      subject,
      picture,
      background_image,
      teacher_owner
    } = createClassRoomBodySchema.parse(request.body)

    const useCase = createClassroomFactory()
    const response = await useCase.execute({
      title,
      description,
      institutionId,
      subject,
      picture,
      background_image,
      teacher_owner
    })
    reply.status(200).send(response)
    
  } catch (createClassroomErr) {
    const error = controllerError(createClassroomErr as Error)

    reply.status(400).send(error)
  }
}
