import { OrdersStatus } from '@/api/getOrders/types'

export interface OrderTableRowProps {
  order: {
    orderId: string
    createdAt: string
    status: OrdersStatus
    customerName: string
    total: number
  }
}
