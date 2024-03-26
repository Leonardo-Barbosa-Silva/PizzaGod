import { SERVER_API } from '../axios'
import { GetManagedEstablishmentRequestBodyProps } from './types'

export async function getManagedEstablishment(): Promise<GetManagedEstablishmentRequestBodyProps> {
  const resp = await SERVER_API.get('/managed-restaurant')

  return resp.data
}
