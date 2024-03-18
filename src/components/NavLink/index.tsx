import { Link, useLocation } from 'react-router-dom'

import { NavLinkProps } from './types'

export function NavLink({ to, hover, ...props }: NavLinkProps) {
  const { pathname } = useLocation()
  const isActive = pathname === to

  return (
    <Link
      className={`flex w-full cursor-default items-center p-2 text-sm ${isActive ? 'font-bold' : ''} ${!isActive && hover ? 'hover:text-muted-foreground' : ''}`}
      to={to}
      {...props}
    />
  )
}
