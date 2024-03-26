import * as z from 'zod'

export const signUpFormSchema = z.object({
  establishment: z
    .string()
    .min(1, 'Por favor, insira o nome do seu estabelecimento'),
  managerName: z.string().min(1, 'Por favor, digite o seu nome/proprietário'),
  email: z.string().email('Por favor, insira um email válido'),
  phoneNumber: z.string().min(14, 'Insira um número de telefone válido'),
})

export type SignUpFormInputsType = z.infer<typeof signUpFormSchema>

export type SignUpFormFieldsName =
  | 'establishment'
  | 'managerName'
  | 'email'
  | 'phoneNumber'

export type SignUpFormStepValues = 1 | 2
