import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { currencyFormatter } from '@/utils/currencyFormatter'

import { OrderDetails } from './Details'
import { OrderStatus } from './Status'
import { OrderTableRowProps } from './types'

export function OrderTableRow({ order }: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search size={20} />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono">{order.orderId}</TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell>{order.customerName}</TableCell>

      <TableCell>{currencyFormatter(order.total, 'pt-BR', 'BRL')}</TableCell>

      <TableCell>
        <Button variant="outline" className="h-8 text-xs">
          Aprovar
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" className="h-8 text-xs">
          <X size={16} className="mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
