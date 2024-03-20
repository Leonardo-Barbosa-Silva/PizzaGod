import { Helmet } from 'react-helmet-async'

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
            {Array.from({ length: 10 }).map((_, i) => {
              return <OrderTableRow key={i} />
            })}
          </TableBody>
        </Table>

        <TablePagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </section>
  )
}
