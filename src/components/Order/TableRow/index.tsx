import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from '../Details'

export function OrderTableRow() {
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

      <TableCell className="font-mono">8asd23fsdvgs34h</TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell>
        <div className="flex items-center">
          <span className="mr-2 h-2 w-2 rounded-full bg-slate-400" />
          <span>Pendente</span>
        </div>
      </TableCell>

      <TableCell>Leonardo Barbosa Silva</TableCell>

      <TableCell>R$ 169,90</TableCell>

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
