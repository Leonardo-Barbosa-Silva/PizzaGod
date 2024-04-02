import { useQuery } from '@tanstack/react-query'
import { Ban } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/getMetricsCards/monthCanceledOrdersAmount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function MonthCanceledOrdersAmountCard() {
  const {
    data: monthCanceledOrdersAmount,
    isPending: isPendingMonthCanceledOrdersAmount,
  } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })

  return (
    <Card>
      {isPendingMonthCanceledOrdersAmount ? (
        <Skeleton className="h-[150px]" />
      ) : monthCanceledOrdersAmount ? (
        <>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-normal md:text-base">
              Cancelados (mês)
            </CardTitle>
            <Ban size={20} />
          </CardHeader>

          <CardContent className="space-y-1">
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount}
            </span>
            {monthCanceledOrdersAmount.diffFromLastMonth > 0 ? (
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-300">
                  {monthCanceledOrdersAmount.diffFromLastMonth}%
                </span>{' '}
                em relação ao mês passado
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-300">
                  {monthCanceledOrdersAmount.diffFromLastMonth}%
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
