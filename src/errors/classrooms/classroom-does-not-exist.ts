export class ClassroomDoesNotExistError extends Error {
  constructor() {
    super('Classroom does not exist.')
  }
}
