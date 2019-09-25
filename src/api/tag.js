import request from '@/utils/request'

export function getTags() {
  return request({
    url: '/get/tag',
    method: 'get'
  })
}
