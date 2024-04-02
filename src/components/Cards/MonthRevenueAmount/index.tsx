import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenueAmount } from '@/api/getMetricsCards/monthRevenueAmount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { currencyFormatter } from '@/utils/currencyFormatter'

export function MonthRevenueAmountCard() {
  const { data: monthRevenueAmount, isPending: isPendingMonthRevenueAmount } =
    useQuery({
      queryKey: ['metrics', 'month-revenue-amount'],
      queryFn: getMonthRevenueAmount,
    })

  return (
    <Card>
      {isPendingMonthRevenueAmount ? (
        <Skeleton className="h-[150px]" />
      ) : monthRevenueAmount ? (
        <>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-normal md:text-base">
              Receita (mês)
            </CardTitle>
            <DollarSign size={20} />
          </CardHeader>

          <CardContent className="space-y-1">
            <span className="text-2xl font-bold tracking-tight">
              {currencyFormatter(
                monthRevenueAmount.receipt / 100,
                'pt-BR',
                'BRL',
              )}
            </span>
            {monthRevenueAmount.diffFromLastMonth >= 0 ? (
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-300">
                  +{monthRevenueAmount.diffFromLastMonth}%
                </span>{' '}
                em relação ao mês passado
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-300">
                  {monthRevenueAmount.diffFromLastMonth}%
                </span>{' '}
                em relação ao mês passado
              </p>
            )}
          </CardContent>
        </>
      ) : (
        <CardHeader className="flex items-center">
          <CardTitle className="text-sm font-normal md:text-base">
            Não conhecido
          </CardTitle>
        </CardHeader>
      )}
    </Card>
  )
}
