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
        <Skeleton className="h-[250px] w-full" />
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
        <span className="text-lg">Não foi possível obter dados</span>
      )}
    </>
  )
}
