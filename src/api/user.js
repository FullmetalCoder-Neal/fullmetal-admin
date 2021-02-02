import { service as Request, userService as userRequest } from '@/utils/request'

export function login(data) {
  return Request({
    url: '/fullmetal-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return userRequest({
    url: '/fullmetal-admin/user/info',
    method: 'get'
  })
}

