import { z } from 'zod'

export const filtersFormSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

export type FiltersFormInputsType = z.infer<typeof filtersFormSchema>
