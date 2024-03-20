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

const data = [
  { date: '10/03', revenue: 1200 },
  { date: '11/03', revenue: 800 },
  { date: '12/03', revenue: 3600 },
  { date: '13/03', revenue: 2000 },
  { date: '14/03', revenue: 420 },
  { date: '15/03', revenue: 970 },
  { date: '16/03', revenue: 3234 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} style={{ fontSize: 16 }}>
        <CartesianGrid vertical={false} className="stroke-muted" />

        <YAxis
          stroke="#888"
          width={100}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value: number) =>
            value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
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
          dataKey="revenue"
          name="Receita"
          stroke={colors.violet[500]}
          type="linear"
          strokeWidth={2}
        />
        <Tooltip cursor={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
