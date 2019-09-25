/**
 * @Author: lwsmilence
 * @Create time: 2019/7/8 22:05
 * @Last Modified time: 2019/7/8 22:05
 * @Desc:
 */

import request from '@/utils/request'

export function getBehaviorCounts() {
  return request({
    url: '/get/behavior/counts',
    method: 'get'
  })
}
