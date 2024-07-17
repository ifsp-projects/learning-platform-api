import { prisma } from '../lib/prisma';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';


export const createUser = async (app: FastifyInstance) => {
    app.withTypeProvider<ZodTypeProvider>().post('/user/create',
        {
            schema: { 
                body: z.object({ 
                    name: z.string(),
                    email: z.string().email(),
                    password: z.string().min(6),
                    created_at: z.coerce.date()
                })
            }
        }
        , async (request) => {
            const { name, email, password, created_at  } = request.body


            const user = await prisma.users.create({
                data: {
                    name,
                    email,
                    password,
                    created_at,
                }
            })

        return {userId: user.id}
    })
}