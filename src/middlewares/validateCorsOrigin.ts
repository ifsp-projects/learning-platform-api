import { NextFunction, Request, Response } from 'express'

const validateCorsOrigin = (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  )

  next()
}

export default validateCorsOrigin
