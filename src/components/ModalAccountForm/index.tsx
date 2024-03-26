import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { updateAccount } from '@/api/updateAccount'

import {
  AccountFormInputsType,
  accountFormSchema,
} from '../Toggles/AccountToggle/types'
import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { ModalAccountFormProps } from './types'

export function ModalAccountForm({
  managedEstablishment,
}: ModalAccountFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AccountFormInputsType>({
    mode: 'onSubmit',
    resolver: zodResolver(accountFormSchema),
    values: {
      name: managedEstablishment?.name ?? '',
      description: managedEstablishment?.description ?? '',
    },
  })

  const { mutateAsync: updateAccountFn } = useMutation({
    mutationFn: updateAccount,
  })

  async function handleUpdateAccountFormSubmit(data: AccountFormInputsType) {
    try {
      const { name, description } = data

      await updateAccountFn({ name, description })

      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      toast.error('Falha ao atualizar o perfil, tente novamente mais tarde')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="lg:text-2xl">
          Perfil do estabelecimento
        </DialogTitle>
        <DialogDescription>
          Atualize informações visíveis a todos
        </DialogDescription>
      </DialogHeader>

      <form
        className="space-y-2"
        onSubmit={handleSubmit(handleUpdateAccountFormSubmit)}
      >
        <div className="grid grid-cols-4 items-center">
          <Label htmlFor="name" className="span-cols-1 text-xs lg:text-sm">
            Nome:{' '}
          </Label>
          <Input
            type="text"
            id="name"
            className="col-span-3 h-8"
            {...register('name')}
            required
          />
        </div>

        <div className="grid grid-cols-4 items-center">
          <Label
            htmlFor="description"
            className="span-cols-1 text-xs lg:text-sm"
          >
            Descrição:{' '}
          </Label>
          <Textarea
            id="description"
            className="col-span-3"
            {...register('description')}
            required
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button" disabled={isSubmitting}>
              Cancelar
            </Button>
          </DialogClose>

          <Button variant="default" type="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
