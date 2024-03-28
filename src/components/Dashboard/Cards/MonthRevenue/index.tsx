import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-normal md:text-base">
          Receita total (mês)
        </CardTitle>
        <DollarSign
          size={20}
          className="text-emerald-500 dark:text-emerald-300"
        />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1248,50</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-300">+2%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
