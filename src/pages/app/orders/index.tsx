import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/getOrders'
import { OrderFilters } from '@/components/Order/Filters'
import { TablePagination } from '@/components/Order/TablePagination'
import { OrderTableRow } from '@/components/Order/TableRow'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform((value) => value - 1)
    .parse(searchParams.get('page') ?? '1')

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { data: respOrders, isLoading: isLoadingPageOrders } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === 'all' ? null : status,
      }),
  })

  function handleOrdersChangePage(newPageIndex: number) {
    setSearchParams((prev) => {
      prev.set('page', `${newPageIndex + 1}`)

      return prev
    })
  }

  return (
    <section className="flex flex-col gap-5 p-6">
      <Helmet title="Pedidos" />
      <h1 className="text-3xl font-semibold tracking-tight">Pedidos</h1>

      <div className="space-y-2">
        <OrderFilters />

        {isLoadingPageOrders ? (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[400px] w-full" />
          </div>
        ) : (
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
        )}

        {respOrders?.meta && (
          <TablePagination
            pageIndex={respOrders.meta.pageIndex}
            totalCount={respOrders.meta.totalCount}
            perPage={respOrders.meta.perPage}
            handleOrdersChangePage={handleOrdersChangePage}
          />
        )}
      </div>
    </section>
  )
}
