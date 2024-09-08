export class LectureDoesNotExistError extends Error {
  constructor() {
    super('Lecture does not exist')
  }
}
