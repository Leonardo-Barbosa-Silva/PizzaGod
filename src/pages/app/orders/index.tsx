import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getOrders } from '@/api/getOrders'
import { OrderFilters } from '@/components/Order/Filters'
import { TablePagination } from '@/components/Order/TablePagination'
import { OrderTableRow } from '@/components/Order/TableRow'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  const { data: respOrders } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  return (
    <section className="flex flex-col gap-5 p-6">
      <Helmet title="Pedidos" />
      <h1 className="text-2xl font-semibold tracking-tight lg:text-4xl">
        Pedidos
      </h1>

      <div className="space-y-2">
        <OrderFilters />

        <Table className="border-2 text-xs">
          <TableHeader className="border-b-2">
            <TableRow>
              <TableHead className="w-[80px]"></TableHead>
              <TableHead className="w-[140px]">Identificador</TableHead>
              <TableHead className="w-[180px]">Realizado há</TableHead>
              <TableHead className="w-[140px]">Status</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="w-[140px]">Valor</TableHead>
              <TableHead className="w-[120px]"></TableHead>
              <TableHead className="w-[120px]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {respOrders?.orders?.map((order) => (
              <OrderTableRow key={order.orderId} order={order} />
            ))}
          </TableBody>
        </Table>

        <TablePagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </section>
  )
}
