import { SERVER_API } from '@/api/axios'

import { GetMonthCanceledOrdersAmountResponse } from './types'

export async function getMonthCanceledOrdersAmount() {
  const resp = await SERVER_API.get<GetMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return resp.data
}
