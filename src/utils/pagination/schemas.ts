import z from 'zod'

export const paginationQueryParamsSchema = z.object({
  page: z.number().int().positive().default(1),
  pageSize: z.number().int().positive().default(10)
})
