import { SERVER_API } from '../axios'
import { GetOrdersResponseProps } from './types'

export async function getOrders(): Promise<GetOrdersResponseProps> {
  const resp = await SERVER_API.get('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return resp.data
}
