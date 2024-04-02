import { SERVER_API } from '../axios'
import { GetManagedEstablishmentResponse } from './types'

export async function getManagedEstablishment(): Promise<GetManagedEstablishmentResponse> {
  const resp = await SERVER_API.get('/managed-restaurant')

  return resp.data
}
