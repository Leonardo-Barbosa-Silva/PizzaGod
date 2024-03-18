import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

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
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log(data)

      toast.success('Enviamos um link de autenticação para o seu e-mail')
    } catch (error) {
      toast.error(
        'Por algum motivo o link de autenticação não foi enviado, tente novamente mais tarde',
      )
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="flex h-[350px] w-full max-w-[450px] flex-col justify-between lg:h-[280px]">
        <Button
          asChild
          variant="ghost"
          className="absolute right-10 top-10 hidden lg:block"
        >
          <Link to="/signup">Novo estabelecimento</Link>
        </Button>

        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-tight lg:text-2xl">
            Acessar Painel
          </h1>
          <p className="text-xs text-muted-foreground lg:text-sm">
            Acompanhe suas vendas agora mesmo!
          </p>
        </div>

        <form
          className="space-y-4"
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

        <Button asChild variant="ghost" className="mx-auto w-fit lg:hidden">
          <Link to="/signup">Novo estabelecimento</Link>
        </Button>
      </div>
    </>
  )
}
