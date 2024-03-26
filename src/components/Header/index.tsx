import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { NavLink } from '../NavLink'
import { AccountToggle } from '../Toggles/AccountToggle'
import { Separator } from '../ui/separator'

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className="flex h-[80px] items-center gap-6 border-b p-4 text-sm">
      <div className="flex items-center justify-center gap-2 font-bold">
        <Pizza className="min-h-6 min-w-6" />
        <span>Pizza.God</span>
      </div>

      <Separator orientation="vertical" />

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-2">
          <li>
            <NavLink to="/" className="hover:text-muted-foreground">
              <Home
                className="mr-2 h-4 w-4"
                strokeWidth={pathname === '/' ? 3 : 2}
              />
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className="hover:text-muted-foreground">
              <UtensilsCrossed
                className="mr-2 h-4 w-4"
                strokeWidth={pathname === '/orders' ? 3 : 2}
              />
              Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>

      <AccountToggle />
    </header>
  )
}
