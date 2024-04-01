export type OrdersStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface GetOrdersResponse {
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

export interface GetOrdersParams {
  pageIndex?: number
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}
