import z from 'zod'

import { paginationQueryParamsSchema } from './schemas'

export interface PaginationQueryParams
  extends z.infer<typeof paginationQueryParamsSchema> {}

export interface PaginationReturn {
  page: number
  pageCount: number
  pageSize: number
  total: number
}
