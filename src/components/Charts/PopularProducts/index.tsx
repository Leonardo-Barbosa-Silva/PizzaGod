import {
  Cell,
  LabelProps,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
  { product: 'Carne seca', count: 20 },
  { product: 'Mussarela', count: 25 },
  { product: 'Frango c/ catupiry', count: 57 },
  { product: 'Calabresa', count: 12 },
  { product: 'Napolitana', count: 19 },
]

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
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart data={data} style={{ fontSize: 14 }}>
        <Pie
          data={data}
          dataKey="count"
          nameKey="product"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={8}
          strokeWidth={0}
          label={renderCustomLabel}
        >
          {data.map((_, i) => (
            <Cell key={`cell=${i}`} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
