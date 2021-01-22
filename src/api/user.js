import { tokenService as tokenRequest, userService as userRequest } from '@/utils/request'

export function login(data) {
  return tokenRequest({
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

