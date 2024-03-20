import { createBrowserRouter as Router } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
// import { Dashboard } from '@/pages/app/dashboard'
import { Orders } from '@/pages/app/orders'
import { Login } from '@/pages/auth/login'
import { SignUp } from '@/pages/auth/signup'
import { NotFound } from '@/pages/NotFound'

export const router = Router([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      // { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
])
