import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  SignUpFormFieldsName,
  SignUpFormInputsType,
  signUpFormSchema,
  SignUpFormStepValues,
} from './types'

const stepSignUpFormToFieldsMap: {
  [Num in SignUpFormStepValues]: Array<SignUpFormFieldsName>
} = {
  1: ['establishment', 'ownerName'],
  2: ['email', 'phoneNumber'],
}

export function SignUp() {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormInputsType>({
    mode: 'onSubmit',
    resolver: zodResolver(signUpFormSchema),
  })

  const navigate = useNavigate()

  const [stepForm, setStepForm] = useState<SignUpFormStepValues>(1)

  async function handleSignUpFormStepChange(changeStep: 1 | -1) {
    if (!stepSignUpFormToFieldsMap[stepForm]) return

    const newStep = (stepForm + changeStep) as SignUpFormStepValues
    const shouldValidateFields = changeStep > 0

    if (
      shouldValidateFields &&
      !(await trigger(stepSignUpFormToFieldsMap[stepForm]))
    )
      return

    setStepForm((currentStep) =>
      newStep >= 1 && newStep <= 2 ? newStep : currentStep,
    )
  }

  async function handleSignUpFormSubmit(data: SignUpFormInputsType) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log(data)

      toast.success('Cadastro realizado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/login'),
        },
      })
    } catch (error) {
      toast.error(
        'Por algum motivo não foi possível criar a sua conta, tente de novo mais tarde',
      )
    }
  }

  function handleChangePhoneNumber(value: string) {
    const formattedValue = formaterPhoneNumber(value)
    setValue('phoneNumber', formattedValue, { shouldValidate: true })
  }

  function formaterPhoneNumber(inputValue: string) {
    const cleanedValue = inputValue.replace(/\D/g, '')
    let formattedValue

    if (cleanedValue.length <= 10) {
      formattedValue = cleanedValue.replace(
        /(\d{2})(\d{4})(\d{4})/,
        '($1) $2-$3',
      )
    } else if (cleanedValue.length === 11) {
      formattedValue = cleanedValue.replace(
        /(\d{2})(\d{5})(\d{4})/,
        '($1) $2-$3',
      )
    } else {
      formattedValue = cleanedValue
    }

    return formattedValue
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="flex h-[500px] w-full max-w-[450px] flex-col justify-between lg:h-[400px]">
        <Button
          asChild
          variant="ghost"
          className="absolute right-10 top-10 hidden lg:block"
        >
          <Link to="/login">Faça login aqui</Link>
        </Button>

        <div className="mx-auto flex items-center gap-4">
          <Button
            className={`rounded-full font-bold ${stepForm === 1 ? '' : 'bg-muted text-muted-foreground'}`}
          >
            1
          </Button>
          <Button
            className={`rounded-full font-bold ${stepForm === 2 ? '' : 'bg-muted text-muted-foreground'}`}
          >
            2
          </Button>
        </div>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(handleSignUpFormSubmit)}
        >
          {stepForm === 1 && (
            <>
              <div className="space-y-1">
                <Label htmlFor="establishment">Nome do estabelecimento</Label>
                <Input
                  {...register('establishment')}
                  id="establishment"
                  type="establishment"
                  placeholder="Digite o nome do estabelecimento"
                  required
                />
                {errors?.establishment?.message && (
                  <span className="text-xs text-destructive">
                    {errors.establishment.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="ownerName">Seu nome/proprietário</Label>
                <Input
                  {...register('ownerName')}
                  id="ownerName"
                  type="ownerName"
                  placeholder="Digite o seu nome/proprietário"
                  required
                />
                {errors?.ownerName?.message && (
                  <span className="text-xs text-destructive">
                    {errors.ownerName.message}
                  </span>
                )}
              </div>

              <div className="flex w-full justify-center">
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleSignUpFormStepChange(1)}
                >
                  Próximo
                </Button>
              </div>
            </>
          )}

          {stepForm === 2 && (
            <>
              <div className="space-y-1">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="Insira o seu e-mail"
                />
                {errors?.email?.message && (
                  <span className="text-xs text-destructive">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="phoneNumber">Telefone</Label>
                <Input
                  {...register('phoneNumber')}
                  id="phoneNumber"
                  name="phoneNumber"
                  aria-label="phoneNumber"
                  type="phoneNumber"
                  placeholder="Insira o número do seu telefone"
                  onChange={(e) => handleChangePhoneNumber(e.target.value)}
                  min={15}
                />
                {errors?.phoneNumber?.message && (
                  <span className="text-xs text-destructive">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>

              <div className="flex w-full items-center justify-center gap-4">
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleSignUpFormStepChange(-1)}
                >
                  Anterior
                </Button>

                <Button type="submit" disabled={isSubmitting}>
                  Finalizar
                </Button>
              </div>

              <p className="mt-8 max-w-[450px] text-center text-xs leading-relaxed text-muted-foreground">
                Ao continuar, você concorda com os nossos{' '}
                <a
                  href=""
                  className="underline underline-offset-2 hover:opacity-50"
                >
                  Termos de Serviço
                </a>{' '}
                e{' '}
                <a
                  href=""
                  className="underline underline-offset-2 hover:opacity-50"
                >
                  Politicas de Privacidade
                </a>
              </p>
            </>
          )}
        </form>

        <Button asChild variant="ghost" className="mx-auto w-fit lg:hidden">
          <Link to="/login">Faça login aqui</Link>
        </Button>
      </div>
    </>
  )
}
