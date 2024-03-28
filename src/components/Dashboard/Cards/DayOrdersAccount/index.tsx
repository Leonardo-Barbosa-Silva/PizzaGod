import { UtensilsCrossed } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAccountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-normal md:text-base">
          Pedidos (dia)
        </CardTitle>
        <UtensilsCrossed
          size={20}
          className="text-rose-500 dark:text-rose-300"
        />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">9</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-300">-3%</span> em
          relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
