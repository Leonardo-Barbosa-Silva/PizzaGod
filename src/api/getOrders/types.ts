export type OrdersStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface GetOrdersResponseProps {
  orders: {
    orderId: string
    createdAt: string
    status: OrdersStatus
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}
