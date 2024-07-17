import { PrismaClient } from '@prisma/client'


//PrismaClient
export const prisma = new PrismaClient({ 
    log: ['query']
}); 