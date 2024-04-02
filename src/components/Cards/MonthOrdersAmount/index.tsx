import { useQuery } from '@tanstack/react-query'
import { UtensilsCrossed } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/getMetricsCards/monthOrdersAmount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount, isPending: isPendingMonthOrdersAmount } =
    useQuery({
      queryKey: ['metrics', 'month-orders-amount'],
      queryFn: getMonthOrdersAmount,
    })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-normal md:text-base">
          Pedidos (mês)
        </CardTitle>
        <UtensilsCrossed size={20} />
      </CardHeader>

      <CardContent className="space-y-1">
        {isPendingMonthOrdersAmount ? (
          <>
            <Skeleton className="h-8" />
            <Skeleton className="h-4" />
          </>
        ) : monthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount}
            </span>
            {monthOrdersAmount.diffFromLastMonth < 0 ? (
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-300">
                  {monthOrdersAmount.diffFromLastMonth}%
                </span>{' '}
                em relação ao mês passado
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-300">
                  +{monthOrdersAmount.diffFromLastMonth}%
                </span>{' '}
                em relação ao mês passado
              </p>
            )}
          </>
        ) : (
          <span className="text-xl font-bold tracking-tight">
            Não foi possível obter os dados
          </span>
        )}
      </CardContent>
    </Card>
  )
}
