import { SERVER_API } from '../axios'
import { GetManagedEstablishmentResponseProps } from './types'

export async function getManagedEstablishment(): Promise<GetManagedEstablishmentResponseProps> {
  const resp = await SERVER_API.get('/managed-restaurant')

  return resp.data
}
