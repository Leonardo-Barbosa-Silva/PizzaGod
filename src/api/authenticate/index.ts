import { SERVER_API } from '../axios'
import { LoginRequestBodyProps } from './types'

export async function login({ email }: LoginRequestBodyProps) {
  await SERVER_API.post('/authenticate', { email })
}
