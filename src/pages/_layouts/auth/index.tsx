import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col justify-between lg:grid lg:grid-cols-2 lg:justify-normal">
      <div className="p-10 lg:flex lg:h-full lg:flex-col lg:justify-between lg:border-r lg:border-foreground/5 lg:bg-muted lg:text-muted-foreground">
        <div className="flex items-center justify-center gap-2 text-foreground lg:justify-normal">
          <Pizza className="h-10 min-h-10 w-10 min-w-10" />
          <span className="text-xl font-bold">Pizza.God</span>
        </div>

        <footer className="hidden text-center text-xs font-semibold lg:block lg:text-start">
          Criado por Leonardo Barbosa &copy; Pizza.God -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center px-10">
        <Outlet />
      </div>

      <footer className="p-10 text-center text-xs font-semibold text-muted-foreground lg:hidden">
        Criado por Leonardo Barbosa &copy; Pizza.God -{' '}
        {new Date().getFullYear()}
      </footer>
    </div>
  )
}
