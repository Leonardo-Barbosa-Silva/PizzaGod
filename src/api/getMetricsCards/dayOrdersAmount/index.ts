import { SERVER_API } from '@/api/axios'

import { GetDayOrdersAmountResponse } from './types'

export async function getDayOrdersAmount() {
  const resp = await SERVER_API.get<GetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return resp.data
}
