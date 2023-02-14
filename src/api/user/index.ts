import request from '~/utils/axios'
import type { LoginType } from './type'

export const apiLogin = (data: LoginType) => {
  return request.post<LoginType>('/user/login', data)
}
