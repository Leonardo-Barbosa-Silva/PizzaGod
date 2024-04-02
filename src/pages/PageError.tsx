import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PageError() {
  return (
    <div className="flex h-screen flex-col items-center justify-evenly space-y-4 text-center">
      <AlertTriangle size={60} className="text-amber-400" />
      <h1 className="text-4xl font-bold tracking-tight">
        Whooops, algo deu errado....
      </h1>
      <p className="text-accent-foreground">
        Voltar para{' '}
        <Link
          to="/"
          className="text-sky-600 underline-offset-2 hover:underline dark:text-sky-400"
        >
          Dashboard
        </Link>
      </p>
    </div>
  )
}
