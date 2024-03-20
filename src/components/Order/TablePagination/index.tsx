import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

interface TablePaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function TablePagination({
  pageIndex,
  totalCount,
  perPage,
}: TablePaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between text-xs lg:text-sm">
      <span className="text-muted-foreground">
        Total de {totalCount} items(s)
      </span>

      <div className="flex items-center gap-6">
        <span>
          Página {pageIndex + 1} de {pages}
        </span>

        <div className="space-x-2">
          <Button variant="outline" size="xs">
            <ChevronsLeft size={20} />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronLeft size={20} />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronRight size={20} />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronsRight size={20} />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
