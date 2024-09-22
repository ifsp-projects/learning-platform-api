import { FastifyInstance } from 'fastify'

import { createClassroom } from '../controllers/classrooms/create-classroom'
import { deleteClassroom } from '../controllers/classrooms/delete-classroom'
import { getClassrooms } from '../controllers/classrooms/get-classrooms'
import { getClassroomById } from '../controllers/classrooms/get-classroom-by-id'

export const classroomsRoutes = async (app: FastifyInstance) => {
  app.get('/classrooms', getClassrooms)
  app.post('/classrooms', createClassroom)
  app.delete('/classrooms/:id', deleteClassroom) 
  app.get('/classrooms/:id', getClassroomById)
}
