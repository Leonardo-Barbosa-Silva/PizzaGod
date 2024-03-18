import { Building, ChevronDown, LogOut } from 'lucide-react'

import { MenuLinkItem } from '../MenuItem'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function AccountToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Pizza.God
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex flex-col">
          <span>Leonardo Barbosa</span>
          <span className="text-xs text-muted-foreground">
            leonardobarbosassilva@gmail.com
          </span>
        </DropdownMenuLabel>

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
  )
}
