import { SERVER_API } from '../axios'

export async function signOut() {
  await SERVER_API.post('/sign-out')
}
