import { createBrowserRouter as Router } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/Dashboard'
import { Login } from './pages/auth/login'

export const router = Router([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },
])
