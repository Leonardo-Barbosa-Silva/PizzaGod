import {
  englishOrderStatusMapToPortuguese,
  orderStatusMapToBgStyle,
  OrderStatusTableRowProps,
} from './types'

export function OrderStatus({ status }: OrderStatusTableRowProps) {
  return (
    <div className="flex items-center">
      <span
        className={`mr-2 h-2 w-2 rounded-full ${orderStatusMapToBgStyle[status] || 'bg-slate-200'}`}
      />
      <span>{englishOrderStatusMapToPortuguese[status] || 'Desconhecido'}</span>
    </div>
  )
}
