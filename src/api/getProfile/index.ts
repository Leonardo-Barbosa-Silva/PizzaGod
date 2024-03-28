import { SERVER_API } from '../axios'
import { GetProfileResponseProps } from './types'

export async function getProfile(): Promise<GetProfileResponseProps> {
  const resp = await SERVER_API.get('/me')

  return resp.data
}
