import { DialogTrigger } from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import {
  AlignJustify,
  Building,
  ChevronDown,
  Home,
  LogOut,
  Tv2,
  UtensilsCrossed,
} from 'lucide-react'

import { getManagedEstablishment } from '@/api/getManagedEstablishment'
import { getProfile } from '@/api/getProfile'
import { ModalAccountForm } from '@/components/ModalAccountForm'
import { Dialog } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { useTheme } from '@/contexts/theme/themeProvider'

import { MenuLinkItem } from '../../MenuItem'
import { Button } from '../../ui/button'
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
} from '../../ui/dropdown-menu'
import { ThemeToggle } from '../ThemeToggle'

export function AccountToggle() {
  const { data: profile } = useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const {
    data: managedEstablishment,
    isLoading: isLoadingManagedEstablishment,
  } = useQuery({
    queryKey: ['getManagedEstablishment'],
    queryFn: getManagedEstablishment,
    staleTime: Infinity,
  })

  const { setTheme } = useTheme()

  return (
    <Dialog>
      <div className="flex flex-1 justify-end lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="select-none px-3">
              <AlignJustify size={20} strokeWidth={2} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mr-1">
            <DropdownMenuLabel className="flex flex-col">
              <span>{managedEstablishment?.name}</span>
              <span className="text-xs text-muted-foreground">
                {profile?.email}
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

            <DialogTrigger asChild>
              <DropdownMenuItem>
                <Building className="mr-2 h-4 w-4" strokeWidth={2} />
                <span>Perfil da Loja</span>
              </DropdownMenuItem>
            </DialogTrigger>

            <MenuLinkItem
              to="/login"
              icon={LogOut}
              label="Sair"
              className="text-rose-500 dark:text-rose-400"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden lg:ml-auto lg:flex lg:items-center lg:gap-2">
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {isLoadingManagedEstablishment ? (
                <Skeleton className="h-full w-[150px]" />
              ) : (
                <>
                  {managedEstablishment?.name}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuLabel className="flex flex-col">
              <span>{profile?.name}</span>
              <span className="text-xs text-muted-foreground">
                {profile?.email}
              </span>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DialogTrigger asChild>
              <DropdownMenuItem>
                <Building className="mr-2 h-4 w-4" strokeWidth={2} />
                <span>Perfil da Loja</span>
              </DropdownMenuItem>
            </DialogTrigger>

            <MenuLinkItem
              to="/login"
              icon={LogOut}
              label="Sair"
              className="text-rose-500 dark:text-rose-400"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ModalAccountForm managedEstablishment={managedEstablishment} />
    </Dialog>
  )
}
