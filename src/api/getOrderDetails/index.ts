import { SERVER_API } from '../axios'
import { GetOrderDetailsProps, GetOrderDetailsResponse } from './types'

export async function getOrderDetails({ orderId }: GetOrderDetailsProps) {
  const resp = await SERVER_API.get<GetOrderDetailsResponse>(
    `/orders/${orderId}`,
  )

  return resp.data
}
