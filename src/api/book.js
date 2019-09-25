import request from '@/utils/request'

export function getSpecificBook(bookType) {
  return request({
    url: '/get/book',
    method: 'get',
    params: { bookType }
  })
}
