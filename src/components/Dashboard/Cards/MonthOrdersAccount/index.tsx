import { UtensilsCrossed } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAccountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-normal md:text-base">
          Pedidos (mês)
        </CardTitle>
        <UtensilsCrossed size={20} />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">87</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-300">+6%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
