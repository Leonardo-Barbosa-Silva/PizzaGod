import { SERVER_API } from '../../axios'
import { ApproveOrderProps } from './types'

export async function approveOrder({ orderId }: ApproveOrderProps) {
  await SERVER_API.patch(`/orders/${orderId}/approve`)
}
