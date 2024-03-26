import { SERVER_API } from '../axios'
import { UpdateAccountRequestBodyProps } from './types'

export async function updateAccount({
  name,
  description,
}: UpdateAccountRequestBodyProps) {
  await SERVER_API.put('/profile', { name, description })
}
