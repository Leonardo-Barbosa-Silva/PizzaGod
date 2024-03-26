import { SERVER_API } from '../axios'
import { SignUpRestaurantRequestBodyProps } from './types'

export async function signupRestaurant(data: SignUpRestaurantRequestBodyProps) {
  const {
    establishment: restaurantName,
    managerName,
    email,
    phoneNumber: phone,
  } = data

  await SERVER_API.post('/', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
