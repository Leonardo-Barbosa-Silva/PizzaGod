import { SERVER_API } from '../../axios'
import { DispatchOrderProps } from './types'

export async function dispatchOrder({ orderId }: DispatchOrderProps) {
  await SERVER_API.patch(`/orders/${orderId}/dispatch`)
}
