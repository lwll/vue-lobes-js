import request from '../utils/request'

export function login(loginParam) {
  const username = loginParam.username
  const password = loginParam.password
  return request({
    url: '/oauth/token',
    method: 'get',
    params: {
      username,
      password
    }
  })
}

export function getUserInfo() {
  return request({
    url: '/get/user',
    method: 'get'
  })
}
