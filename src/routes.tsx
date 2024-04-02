import { createBrowserRouter as Router } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Home } from '@/pages/app/home'
import { Orders } from '@/pages/app/orders'
import { Login } from '@/pages/auth/login'
import { SignUp } from '@/pages/auth/signup'
import { PageNotFound } from '@/pages/PageNotFound'

import { PageError } from './pages/PageError'

export const router = Router([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageError />,
    children: [
      { path: '/', element: <Home /> },
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
  {
    path: '*',
    element: <PageNotFound />,
  },
])
