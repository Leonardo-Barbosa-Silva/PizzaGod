import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: gfis2345hJSD4gj</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <Table className="text-xs lg:text-sm">
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="text-muted-foreground">Status</span>
            </TableCell>
            <TableCell className="flex items-center justify-end">
              <div className="flex items-center">
                <span className="mr-2 h-2 w-2 rounded-full bg-slate-400" />
                <span>Pendente</span>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <span className="text-muted-foreground">Cliente</span>
            </TableCell>
            <TableCell className="flex items-center justify-end">
              <span>Leonardo Barbosa Silva</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <span className="text-muted-foreground">Telefone</span>
            </TableCell>
            <TableCell className="flex items-center justify-end">
              <span>(11) 94928-4957</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <span className="text-muted-foreground">E-mail</span>
            </TableCell>
            <TableCell className="flex items-center justify-end">
              <span>leonardobarbosassilva@gmail.com</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <span className="text-muted-foreground">Realizado há</span>
            </TableCell>
            <TableCell className="flex items-center justify-end">
              <span>há 5 minutos</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className="space-y-6 text-xs lg:text-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qtd.</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <span>Pizza carne seca</span>
            </TableCell>

            <TableCell className="text-right">
              <span>2</span>
            </TableCell>

            <TableCell className="text-right">
              <span>R$ 58,90</span>
            </TableCell>

            <TableCell className="text-right">
              <span>R$ 117,80</span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <span>Pizza carne seca</span>
            </TableCell>

            <TableCell className="text-right">
              <span>2</span>
            </TableCell>

            <TableCell className="text-right">
              <span>R$ 58,90</span>
            </TableCell>

            <TableCell className="text-right">
              <span>R$ 117,80</span>
            </TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-medium">R$ 890,88</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DialogContent>
  )
}
