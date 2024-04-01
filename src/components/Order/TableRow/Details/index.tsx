import { useQuery } from '@tanstack/react-query'

import { getOrderDetails } from '@/api/getOrderDetails'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { currencyFormatter } from '@/utils/currencyFormatter'

import { OrderStatus } from '../Status'
import { OrderDetailsProps } from './types'

export function OrderDetails({ orderId, isOpen }: OrderDetailsProps) {
  const { data: orderDetails, isLoading } = useQuery({
    queryKey: ['order-details', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: isOpen,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {orderId}</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      {isLoading ? (
        <div className="space-y-2">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-[150px]" />
        </div>
      ) : orderDetails ? (
        <>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <span className="text-muted-foreground">Status</span>
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <OrderStatus status={orderDetails.status} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span className="text-muted-foreground">Cliente</span>
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <span>{orderDetails.customer.name}</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span className="text-muted-foreground">Telefone</span>
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <span>{orderDetails.customer.phone ?? 'Desconhecido'}</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span className="text-muted-foreground">E-mail</span>
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <span>{orderDetails.customer.email}</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span className="text-muted-foreground">Realizado há</span>
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <span>
                    {new Date(orderDetails.createdAt).toLocaleDateString(
                      'pt-BR',
                    )}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orderDetails.orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <span>{item.product.name}</span>
                  </TableCell>

                  <TableCell className="text-right">
                    <span>{item.quantity}</span>
                  </TableCell>

                  <TableCell className="text-right">
                    <span>
                      {currencyFormatter(
                        item.priceInCents / 100,
                        'pt-BR',
                        'BRL',
                      )}
                    </span>
                  </TableCell>

                  <TableCell className="text-right">
                    <span>
                      {currencyFormatter(
                        (item.priceInCents * item.quantity) / 100,
                        'pt-BR',
                        'BRL',
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell className="text-right font-medium">
                  <span>
                    {currencyFormatter(
                      orderDetails.totalInCents / 100,
                      'pt-BR',
                      'BRL',
                    )}
                  </span>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </>
      ) : (
        <DialogHeader>
          <DialogTitle>Não foi possível achar o pedido</DialogTitle>
          <DialogDescription>Tente novamente mais tarde!</DialogDescription>
        </DialogHeader>
      )}
    </DialogContent>
  )
}
