import { z } from 'zod'

export const accountFormSchema = z.object({
  name: z.string(),
  description: z.string(),
})

export type AccountFormInputsType = z.infer<typeof accountFormSchema>
