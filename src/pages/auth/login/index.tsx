import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { LoginFormInputsType, loginFormSchema } from './types'

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputsType>({
    mode: 'onSubmit',
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLoginFormSubmit(data: LoginFormInputsType) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="w-full max-w-[500px]">
        <h1 className="text-center text-xl font-semibold tracking-tight lg:text-2xl">
          Acessar Painel
        </h1>
        <p className="text-center text-xs text-muted-foreground lg:text-sm">
          Acompanhe suas vendas agora mesmo!
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={handleSubmit(handleLoginFormSubmit)}
        >
          <div className="space-y-2">
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
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Acessar Painel
          </Button>
        </form>
      </div>
    </>
  )
}
