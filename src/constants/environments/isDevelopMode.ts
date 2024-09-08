import { env } from '../env'

export const IS_DEVELOP_MODE = env.NODE_ENV === 'dev'
