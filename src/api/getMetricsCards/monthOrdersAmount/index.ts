import { SERVER_API } from '@/api/axios'

import { GetMonthOrdersAmountResponse } from './types'

export async function getMonthOrdersAmount() {
  const resp = await SERVER_API.get<GetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return resp.data
}
