import { verify } from 'jsonwebtoken'
import AppError from '../../../constants/errors/AppError'

interface Request {
  token: string
  secret: string
}

interface Response {
  email: string
  firstName: string
  lastName: string
  fullName: string
  id: string
  iat: number
  exp: number
  profilePicture?: string
}
export const decodeToken = async ({
  token,
  secret
}: Request): Promise<Response> => {
  try {
    if (!token) {
      throw new AppError('JWT token is missing', 401)
    }

    const decoded = verify(token, secret)

    return decoded as Response
  } catch (decodeTokenError) {
    console.error({ decodeTokenError })

    throw new AppError('Invalid JWT token', 401)
  }
}
