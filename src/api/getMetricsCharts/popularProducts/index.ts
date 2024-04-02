import { SERVER_API } from '@/api/axios'

import { GetPopularProductsResponse } from './types'

export async function getPopularProducts() {
  const resp = await SERVER_API.get<GetPopularProductsResponse[]>(
    '/metrics/popular-products',
  )

  return resp.data
}
