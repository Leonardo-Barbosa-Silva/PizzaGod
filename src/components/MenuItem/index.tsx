import { useLocation } from 'react-router-dom'

import { NavLink } from '../NavLink'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { MenuItemProps } from './type'

export function MenuLinkItem({
  to,
  icon: Icon,
  label,
  className = '',
  linkClassName = '',
}: MenuItemProps) {
  const { pathname } = useLocation()

  return (
    <DropdownMenuItem className={`p-0 ${className}`}>
      <NavLink to={to} className={linkClassName}>
        <Icon className="mr-2 h-4 w-4" strokeWidth={pathname === to ? 3 : 2} />
        {label}
      </NavLink>
    </DropdownMenuItem>
  )
}
