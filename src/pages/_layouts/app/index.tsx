import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <header>Cabeçalho</header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
