import { useQuery } from '@tanstack/react-query'
import {
  Cell,
  LabelProps,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '@/api/getMetricsCharts/popularProducts'
import { Skeleton } from '@/components/ui/skeleton'

const COLORS = [
  colors.emerald[500],
  colors.violet[500],
  colors.amber[500],
  colors.rose[500],
  colors.sky[500],
]

function renderCustomLabel({ name, value }: LabelProps): string {
  return name?.substring(0, 12).concat(`... (${value})`) || ''
}

export function PopularProductsChart() {
  const { data: popularProducts, isLoading: isLoadingPopularProducts } =
    useQuery({
      queryKey: ['metrics', 'popular-products'],
      queryFn: getPopularProducts,
    })

  return (
    <>
      {isLoadingPopularProducts ? (
        <Skeleton className="mt-[14px] h-[250px] w-full" />
      ) : popularProducts ? (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart data={popularProducts} style={{ fontSize: 14 }}>
            <Pie
              data={popularProducts}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={8}
              strokeWidth={0}
              label={renderCustomLabel}
            >
              {popularProducts.map((_, i) => (
                <Cell key={`cell=${i}`} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
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
