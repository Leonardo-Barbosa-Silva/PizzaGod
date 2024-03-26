import { SERVER_API } from '../axios'
import { GetProfileRequestBodyProps } from './types'

export async function getProfile(): Promise<GetProfileRequestBodyProps> {
  const resp = await SERVER_API.get('/me')

  return resp.data
}
