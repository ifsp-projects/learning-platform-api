export class InstitutionDoesNotExistError extends Error {
  constructor() {
    super('Institution does not exist')
  }
}
