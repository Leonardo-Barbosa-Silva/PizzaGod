import * as z from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email('Por favor, insira um email válido'),
})

export type LoginFormInputsType = z.infer<typeof loginFormSchema>
