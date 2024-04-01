import { SERVER_API } from '../axios'
import { GetOrdersParams, GetOrdersResponse } from './types'

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersParams): Promise<GetOrdersResponse> {
  const resp = await SERVER_API.get('/orders', {
    params: {
      pageIndex: pageIndex ?? 0,
      orderId,
      customerName,
      status,
    },
  })

  return resp.data
}
