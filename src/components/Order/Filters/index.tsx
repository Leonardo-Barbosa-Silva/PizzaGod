import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrderFilters() {
  return (
    <form className="flex items-center gap-2">
      <Label htmlFor="search" className="text-base">
        Filtros:{' '}
      </Label>
      <Input
        id="id"
        name="id"
        type="text"
        placeholder="ID do pedido"
        className="h-7 w-auto text-xs lg:text-sm"
      />
      <Input
        id="client"
        name="client"
        type="text"
        placeholder="Nome do cliente"
        className="h-7 w-[400px] text-xs lg:text-sm"
      />
      <Select defaultValue="all">
        <SelectTrigger className="h-7 w-[180px] text-xs lg:text-sm">
          <SelectValue />
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
      >
        <X size={14} className="mr-2" />
        Remover filtros
      </Button>
    </form>
  )
}
