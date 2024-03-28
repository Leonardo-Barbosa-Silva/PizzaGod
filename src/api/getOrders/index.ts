import { SERVER_API } from '../axios'
import { GetOrdersParams, GetOrdersResponseProps } from './types'

export async function getOrders({
  pageIndex,
}: GetOrdersParams): Promise<GetOrdersResponseProps> {
  const resp = await SERVER_API.get('/orders', {
    params: {
      pageIndex: pageIndex ?? 0,
    },
  })

  return resp.data
}
