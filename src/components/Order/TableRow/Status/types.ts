import { OrdersStatus } from '@/api/getOrders/types'

export interface OrderStatusTableRowProps {
  status: OrdersStatus
}

export const englishOrderStatusMapToPortuguese: Record<OrdersStatus, string> = {
  pending: 'Pendente',
  processing: 'Processando',
  delivering: 'Em entrega',
  delivered: 'Entregue',
  canceled: 'Cancelado',
}

export const orderStatusMapToBgStyle: Record<OrdersStatus, string> = {
  pending: 'bg-slate-100',
  processing: 'bg-blue-400',
  delivering: 'bg-amber-500',
  delivered: 'bg-emerald-500',
  canceled: 'bg-rose-500',
}
