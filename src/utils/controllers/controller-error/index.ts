import { ZodError } from 'zod'
import { ZodErrorFormatter } from '../../formatters/zod-error-formatter'
import { ControllerErrorReturn } from './types'

export const controllerError = (err: Error): ControllerErrorReturn => {
  if (err instanceof ZodError) {
    const errors = ZodErrorFormatter(err)

    return {
      errors
    }
  }

  return {
    errors: [
      {
        message: err.message
      }
    ]
  }
}
