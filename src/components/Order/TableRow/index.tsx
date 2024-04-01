import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { GetOrdersResponse, OrdersStatus } from '@/api/getOrders/types'
import { approveOrder } from '@/api/updateOrderStatus/approveOrder'
import { cancelOrder } from '@/api/updateOrderStatus/cancelOrder'
import { deliverOrder } from '@/api/updateOrderStatus/deliverOrder'
import { dispatchOrder } from '@/api/updateOrderStatus/dispatchOrder'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { currencyFormatter } from '@/utils/currencyFormatter'

import { OrderDetails } from './Details'
import { OrderStatus } from './Status'
import { OrderTableRowProps } from './types'

export function OrderTableRow({ order }: OrderTableRowProps) {
  const [isModalOrderDetailsOpen, setIsModalOrderDetailsOpen] =
    useState<boolean>(false)

  const queryClient = useQueryClient()

  async function updateOrderStatusOnQueryData(
    orderId: string,
    status: OrdersStatus,
  ) {
    const ordersListsQueryData = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['orders'],
    })

    ordersListsQueryData.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) return

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) =>
          order.orderId === orderId ? { ...order, status } : order,
        ),
      })
    })
  }

  const { mutateAsync: approveOrderFn, isPending: isPendingApproveOrder } =
    useMutation({
      mutationKey: ['approve-order'],
      mutationFn: approveOrder,
      async onSuccess(_, { orderId }) {
        await updateOrderStatusOnQueryData(orderId, 'processing')

        toast.success('Pedido aprovado!')
      },
      onError() {
        toast.error(
          'Não foi possível aprovar o pedido, tente novamente mais tarde',
        )
      },
    })

  const { mutateAsync: cancelOrderFn, isPending: isPendingCancelOrder } =
    useMutation({
      mutationKey: ['cancel-order'],
      mutationFn: cancelOrder,
      async onSuccess(_, { orderId }) {
        await updateOrderStatusOnQueryData(orderId, 'canceled')

        toast.success('Pedido cancelado!')
      },
      onError() {
        toast.error(
          'Não foi possível cancelar o pedido, tente novamente mais tarde',
        )
      },
    })

  const { mutateAsync: dispatchOrderFn, isPending: isPendingDispatchOrder } =
    useMutation({
      mutationKey: ['dispatch-order'],
      mutationFn: dispatchOrder,
      async onSuccess(_, { orderId }) {
        await updateOrderStatusOnQueryData(orderId, 'delivering')

        toast.success('Pedido em entrega!')
      },
      onError() {
        toast.error(
          'Não foi possível marcar o pedido como "em entrega", tente novamente mais tarde',
        )
      },
    })

  const { mutateAsync: deliverOrderFn, isPending: isPendingDeliverOrder } =
    useMutation({
      mutationKey: ['deliver-order'],
      mutationFn: deliverOrder,
      async onSuccess(_, { orderId }) {
        await updateOrderStatusOnQueryData(orderId, 'delivered')

        toast.success('Pedido entregue!')
      },
      onError() {
        toast.error(
          'Não foi possível marcar o pedido como "entregue", tente novamente mais tarde',
        )
      },
    })

  return (
    <TableRow>
      <TableCell>
        <Dialog
          open={isModalOrderDetailsOpen}
          onOpenChange={setIsModalOrderDetailsOpen}
        >
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search size={20} />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails
            orderId={order.orderId}
            isOpen={isModalOrderDetailsOpen}
          />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono">{order.orderId}</TableCell>

      <TableCell className="text-muted-foreground">
        {new Date(order.createdAt).toLocaleDateString('pt-BR')}
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell>{order.customerName}</TableCell>

      <TableCell>
        {currencyFormatter(order.total / 100, 'pt-BR', 'BRL')}
      </TableCell>

      <TableCell>
        {order.status === 'pending' && (
          <Button
            variant="outline"
            className="h-8 text-xs"
            onClick={() => approveOrderFn({ orderId: order.orderId })}
            disabled={isPendingApproveOrder}
          >
            Aprovar
            <ArrowRight size={16} className="ml-2" />
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            variant="outline"
            className="h-8 text-xs"
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
            disabled={isPendingDispatchOrder}
          >
            Em entrega
            <ArrowRight size={16} className="ml-2" />
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            variant="outline"
            className="h-8 text-xs"
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
            disabled={isPendingDeliverOrder}
          >
            Entregue
            <ArrowRight size={16} className="ml-2" />
          </Button>
        )}
      </TableCell>

      <TableCell>
        <Button
          variant="ghost"
          className="h-8 text-xs"
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isPendingCancelOrder
          }
        >
          <X size={16} className="mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
