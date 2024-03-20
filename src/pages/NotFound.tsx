import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-xl font-bold tracking-tight md:text-4xl">
        Página não encontrada
      </h1>
      <p className="text-xs text-accent-foreground md:text-sm">
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
