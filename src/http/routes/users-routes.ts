import { FastifyInstance } from "fastify"
import { getUsers } from "../controllers/users/get-users"
import { createUser } from "../controllers/users/create-user"
import { deleteUser } from "../controllers/users/delete-user"
import { getUserByEmail } from "../controllers/users/get-user-by-email"

export const usersRoutes = async (app: FastifyInstance) => {
  app.get('/users', getUsers)
  app.post('/users', createUser)
  app.delete('/users/:id', deleteUser) 
  app.get('/users/:email', getUserByEmail)
}