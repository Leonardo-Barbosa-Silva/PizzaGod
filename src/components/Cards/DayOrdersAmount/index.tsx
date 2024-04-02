import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/getMetricsCards/dayOrdersAmount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount, isPending: isPendingDayOrdersAmount } =
    useQuery({
      queryKey: ['metrics', 'day-orders-amount'],
      queryFn: getDayOrdersAmount,
    })

  return (
    <Card>
      {isPendingDayOrdersAmount ? (
        <Skeleton className="h-[150px]" />
      ) : dayOrdersAmount ? (
        <>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-normal md:text-base">
              Pedidos (dia)
            </CardTitle>
            <Utensils size={20} />
          </CardHeader>
          <CardContent className="space-y-1">
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount}
            </span>
            {dayOrdersAmount.diffFromYesterday >= 0 ? (
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-300">
                  +{dayOrdersAmount.diffFromYesterday}%
                </span>{' '}
                em relação a ontem
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-300">
                  {dayOrdersAmount.diffFromYesterday}%
                </span>{' '}
                em relação a ontem
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
