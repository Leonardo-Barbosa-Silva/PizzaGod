import { SERVER_API } from '../../axios'
import { DeliverOrderProps } from './types'

export async function deliverOrder({ orderId }: DeliverOrderProps) {
  await SERVER_API.patch(`/orders/${orderId}/deliver`)
}
