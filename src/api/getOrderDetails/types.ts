import { OrdersStatus } from '../getOrders/types'

export interface GetOrderDetailsProps {
  orderId: string
}

export interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: OrdersStatus
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    product: {
      name: string
    }
    priceInCents: number
    quantity: number
  }[]
}
