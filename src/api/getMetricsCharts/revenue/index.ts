import { SERVER_API } from '@/api/axios'

import {
  GetDailyRevenueInPeriodProps,
  GetDailyRevenueInPeriodResponse,
} from './types'

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodProps) {
  const resp = await SERVER_API.get<GetDailyRevenueInPeriodResponse[]>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return resp.data
}
