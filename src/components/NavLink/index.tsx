import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink({ to, className, ...props }: NavLinkProps) {
  const { pathname } = useLocation()
  const isActive = pathname === to

  return (
    <Link
      className={`flex w-full cursor-default items-center p-2 text-sm ${isActive ? 'font-bold' : ''} ${className}`}
      to={to}
      {...props}
    />
  )
}
