import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

let isRelogin = true // to fix repeat relogin when multiple request failed

axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.timeout = 5000

// create an axios instance for request without token
const service = axios.create()

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log(error.response.status) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// create an axios instance for request with token
const tokenService = axios.create()

// request interceptor
tokenService.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.common['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
tokenService.interceptors.response.use(
  response => {
    const res = response.data

    if (res.errCode !== 0) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // to re-login
    if (isRelogin) {
      isRelogin = false
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        confirmButtonText: 'Re-Login',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          isRelogin = true
          location.reload()
        })
      })
    }
    return Promise.reject(error)
  }
)

// create an axios instance for getUserInfo
// to fix re-login twice when refresh browser with token expired
const userService = axios.create()

// request interceptor
userService.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.common['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
userService.interceptors.response.use(
  response => {
    const res = response.data

    if (res.errCode !== 0) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export { service, tokenService, userService }
