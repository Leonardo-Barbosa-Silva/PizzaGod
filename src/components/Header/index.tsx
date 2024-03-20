import {
  AlignJustify,
  Building,
  Home,
  LogOut,
  Pizza,
  Tv2,
  UtensilsCrossed,
} from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { useTheme } from '@/contexts/theme/themeProvider'

import { MenuLinkItem } from '../MenuItem'
import { NavLink } from '../NavLink'
import { AccountToggle } from '../Toggles/AccountToggle'
import { ThemeToggle } from '../Toggles/ThemeToggle'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'

export function Header() {
  const { pathname } = useLocation()
  const { setTheme } = useTheme()

  return (
    <header className="flex h-[80px] items-center justify-between gap-6 border-b p-4 text-sm lg:justify-normal">
      <div className="flex items-center justify-center gap-2 font-bold lg:justify-normal">
        <Pizza className="min-h-6 min-w-6" />
        <span>Pizza.God</span>
      </div>

      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="select-none px-3">
              <AlignJustify size={20} strokeWidth={2} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mr-1">
            <DropdownMenuLabel className="flex flex-col">
              <span>Leonardo Barbosa</span>
              <span className="text-xs text-muted-foreground">
                leonardobarbosassilva@gmail.com
              </span>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <MenuLinkItem to="/" icon={Home} label="Inicio" />

            <MenuLinkItem to="/orders" icon={UtensilsCrossed} label="Pedidos" />

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Tv2 className="mr-2 h-4 w-4" strokeWidth={2} />
                <span>Tema</span>
              </DropdownMenuSubTrigger>

              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" strokeWidth={2} />
              <span>Perfil da Loja</span>
            </DropdownMenuItem>

            <MenuLinkItem
              to="/login"
              icon={LogOut}
              label="Sair"
              className="text-rose-500 dark:text-rose-400"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Separator orientation="vertical" className="hidden lg:block" />

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

      <div className="ml-auto hidden items-center lg:flex lg:gap-2">
        <ThemeToggle />

        <AccountToggle />
      </div>
    </header>
  )
}
