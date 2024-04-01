import { SERVER_API } from '../../axios'
import { CancelOrderProps } from './types'

export async function cancelOrder({ orderId }: CancelOrderProps) {
  await SERVER_API.patch(`/orders/${orderId}/cancel`)
}
