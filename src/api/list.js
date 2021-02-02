import { tokenService as tokenRequest } from '@/utils/request'

export function getList(data, params) {
  return tokenRequest({
    url: '/fullmetal-admin/rs/list',
    method: 'post',
    data,
    params
  })
}

