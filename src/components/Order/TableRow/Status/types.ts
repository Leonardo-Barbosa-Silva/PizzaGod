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
  pending: 'bg-slate-200',
  processing: 'bg-slate-500',
  delivering: 'bg-amber-500',
  delivered: 'bg-emerald-500',
  canceled: 'bg-rose-500',
}
