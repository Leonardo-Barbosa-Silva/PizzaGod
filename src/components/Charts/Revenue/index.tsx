import { useMemo } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { Skeleton } from '@/components/ui/skeleton'
import { currencyFormatter } from '@/utils/currencyFormatter'

import { RevenueChartProps } from './types'

export function RevenueChart({ data, isLoading }: RevenueChartProps) {
  const dailyRevenueChartData = useMemo(
    () =>
      data?.map((chartItem) => ({
        ...chartItem,
        receipt: chartItem.receipt / 100,
      })),
    [data],
  )

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-[250px] w-full" />
      ) : dailyRevenueChartData ? (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dailyRevenueChartData} style={{ fontSize: 16 }}>
            <CartesianGrid vertical={false} className="stroke-muted" />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={100}
              tickFormatter={(value) =>
                currencyFormatter(value, 'pt-BR', 'BRL')
              }
            />

            <XAxis
              stroke="#888"
              tickLine={false}
              axisLine={false}
              dataKey="date"
              padding={{ left: 16, right: 20 }}
              dy={14}
            />
            <Line
              dataKey="receipt"
              name="Receita"
              stroke={colors.violet[500]}
              type="linear"
              strokeWidth={2}
            />
            <Tooltip
              cursor={false}
              formatter={(value) =>
                currencyFormatter(Number(value), 'pt-BR', 'BRL')
              }
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-[250px] items-center justify-center">
          <span className="text-xl font-semibold tracking-tight">
            Não foi possível obter os dados
          </span>
        </div>
      )}
    </>
  )
}
