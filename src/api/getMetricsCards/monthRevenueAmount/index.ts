import { SERVER_API } from '@/api/axios'

import { GetMonthRevenueAmountResponse } from './types'

export async function getMonthRevenueAmount() {
  const resp = await SERVER_API.get<GetMonthRevenueAmountResponse>(
    '/metrics/month-receipt',
  )

  return resp.data
}
