export class DocumentDoesNotExistError extends Error {
  constructor() {
    super('Document does not exist.')
  }
}
