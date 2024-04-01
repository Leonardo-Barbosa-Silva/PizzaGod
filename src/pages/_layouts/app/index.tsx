import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { SERVER_API } from '@/api/axios'
import { Header } from '@/components/Header'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = SERVER_API.interceptors.response.use(
      (resp) => resp,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/login', { replace: true })
          }
        }
      },
    )

    return () => {
      SERVER_API.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
