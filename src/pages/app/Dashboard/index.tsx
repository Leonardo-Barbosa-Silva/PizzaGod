import { BarChart } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { PopularProductsChart } from '@/components/Charts/PopularProducts'
import { RevenueChart } from '@/components/Charts/Revenue'
import { DayOrdersAccountCard } from '@/components/Dashboard/Cards/DayOrdersAccount'
import { MonthCanceledOrdersAccount } from '@/components/Dashboard/Cards/MonthCanceledOrdersAccount'
import { MonthOrdersAccountCard } from '@/components/Dashboard/Cards/MonthOrdersAccount'
import { MonthRevenueCard } from '@/components/Dashboard/Cards/MonthRevenue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Dashboard() {
  return (
    <section className="flex flex-col gap-5 p-6">
      <Helmet title="Dashboard" />
      <h1 className="text-2xl font-semibold tracking-tight lg:text-4xl">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MonthRevenueCard />
        <MonthOrdersAccountCard />
        <DayOrdersAccountCard />
        <MonthCanceledOrdersAccount />
      </div>

      <div className="hidden md:grid md:grid-cols-6 md:gap-4 lg:grid-cols-9">
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold tracking-tight">
              Receita no período
            </CardTitle>
            <CardDescription className="text-sm">
              Receita diária no período
            </CardDescription>
          </CardHeader>

          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card className="md:col-span-6 lg:col-span-3">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-xl font-semibold tracking-tight">
              Produtos populares
            </CardTitle>
            <BarChart size={20} />
          </CardHeader>

          <CardContent>
            <PopularProductsChart />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
