import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { PieChart } from 'lucide-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Helmet } from 'react-helmet-async'

import { getDailyRevenueInPeriod } from '@/api/getMetricsCharts/revenue'
import { MonthCanceledOrdersAmountCard } from '@/components//Cards/MonthCanceledOrdersAmount'
import { DayOrdersAmountCard } from '@/components/Cards/DayOrdersAmount'
import { MonthOrdersAmountCard } from '@/components/Cards/MonthOrdersAmount'
import { MonthRevenueAmountCard } from '@/components/Cards/MonthRevenueAmount'
import { PopularProductsChart } from '@/components/Charts/PopularProducts'
import { RevenueChart } from '@/components/Charts/Revenue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-range-picker'

export function Home() {
  const [revenueChartDateRange, setRevenueChartDateRange] = useState<
    DateRange | undefined
  >({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const {
    data: dailyRevenueInPeriod,
    isLoading: isLoadingDailyRevenueInPeriod,
  } = useQuery({
    queryKey: ['metrics', 'get-daily-revenue-in-period', revenueChartDateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({
        from: revenueChartDateRange?.from,
        to: revenueChartDateRange?.to,
      }),
  })

  return (
    <section className="flex flex-col gap-5 p-6">
      <Helmet title="Dashboard" />
      <h1 className="text-2xl font-semibold tracking-tight lg:text-4xl">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MonthRevenueAmountCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="hidden md:grid md:grid-cols-6 md:gap-4 lg:grid-cols-9">
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-xl font-semibold tracking-tight">
              Receita no período
              <DatePickerWithRange
                date={revenueChartDateRange}
                onDateChange={setRevenueChartDateRange}
              />
            </CardTitle>

            <CardDescription className="text-sm">
              Receita diária no período
            </CardDescription>
          </CardHeader>

          <CardContent>
            <RevenueChart
              data={dailyRevenueInPeriod}
              isLoading={isLoadingDailyRevenueInPeriod}
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-6 lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-xl font-semibold tracking-tight">
              Produtos populares
              <PieChart size={20} />
            </CardTitle>
          </CardHeader>

          <CardContent>
            <PopularProductsChart />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
