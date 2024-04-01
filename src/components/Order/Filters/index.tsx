import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { FiltersFormInputsType, filtersFormSchema } from './types'

export function OrderFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = {
    orderId: searchParams.get('orderId'),
    costumerName: searchParams.get('costumerName'),
    status: searchParams.get('status'),
  }

  const { register, handleSubmit, control, reset } =
    useForm<FiltersFormInputsType>({
      mode: 'onSubmit',
      resolver: zodResolver(filtersFormSchema),
      defaultValues: {
        orderId: filters.orderId ?? '',
        customerName: filters.costumerName ?? '',
        status: filters.status ?? 'all',
      },
    })

  function handleFiltersFormSubmit(data: FiltersFormInputsType) {
    const { orderId, customerName, status } = data

    setSearchParams((prev) => {
      if (orderId) {
        prev.set('orderId', orderId)
      } else {
        prev.delete('orderId')
      }

      if (customerName) {
        prev.set('customerName', customerName)
      } else {
        prev.delete('customerName')
      }

      if (status) {
        prev.set('status', status)
      } else {
        prev.delete('status')
      }

      prev.set('page', '1')

      return prev
    })
  }

  function handleClearFilters() {
    setSearchParams((prev) => {
      prev.delete('orderId')
      prev.delete('customerName')
      prev.delete('status')
      prev.set('page', '1')

      return prev
    })

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFiltersFormSubmit)}
    >
      <Input
        {...register('orderId')}
        id="id"
        type="text"
        placeholder="ID do pedido"
        className="h-7 w-auto text-xs lg:text-sm"
      />

      <Input
        {...register('customerName')}
        id="client"
        type="text"
        placeholder="Nome do cliente"
        className="h-7 w-[400px] text-xs lg:text-sm"
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
              defaultValue="all"
            >
              <SelectTrigger className="h-7 w-[180px] text-xs lg:text-sm">
                <SelectValue defaultValue="all" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      ></Controller>

      <Button
        type="submit"
        variant="secondary"
        size="xs"
        className="text-xs lg:text-sm"
      >
        <Search size={14} className="mr-2" />
        Filtrar resultados
      </Button>

      <Button
        type="button"
        variant="outline"
        size="xs"
        className="text-xs lg:text-sm"
        onClick={() => handleClearFilters()}
      >
        <X size={14} className="mr-2" />
        Remover filtros
      </Button>
    </form>
  )
}
