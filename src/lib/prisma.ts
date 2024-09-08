import { PrismaClient } from '@prisma/client'
import { IS_DEVELOP_MODE } from '../constants/environments/isDevelopMode'

export const prisma = new PrismaClient({
  log: IS_DEVELOP_MODE ? ['query'] : []
})
