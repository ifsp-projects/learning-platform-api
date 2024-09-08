import { paginationQueryParamsSchema } from './schemas'

const stringToNumber = (value?: string) =>
  value ? parseInt(value, 10) : undefined

export const getControllerPagination = (query: unknown) => {
  const { page, pageSize } = query as {
    page?: string
    pageSize?: string
  }

  const parsedQuery = {
    page: stringToNumber(page),
    pageSize: stringToNumber(pageSize)
  }

  const pagination = paginationQueryParamsSchema.parse(parsedQuery)

  return pagination
}
