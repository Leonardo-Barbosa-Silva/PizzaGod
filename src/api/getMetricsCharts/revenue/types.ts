export interface GetDailyRevenueInPeriodProps {
  from?: Date
  to?: Date
}

export interface GetDailyRevenueInPeriodResponse {
  date: string
  receipt: number
}
