export interface ControllerErrorReturn {
  errors: {
    path?: string
    message: string
  }[]
}
