import { GetDailyRevenueInPeriodResponse } from '@/api/getMetricsCharts/revenue/types'

export interface RevenueChartProps {
  data?: GetDailyRevenueInPeriodResponse[]
  isLoading?: boolean
}
