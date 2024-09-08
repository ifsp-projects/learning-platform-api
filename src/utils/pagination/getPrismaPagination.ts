import { PaginationQueryParams } from './types'

export const getPrismaPagination = ({
  page,
  pageSize
}: PaginationQueryParams) => {
  return {
    skip: (page - 1) * pageSize,
    take: pageSize
  }
}
