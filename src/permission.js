/**
 * @Author: lwsmilence
 * @Create time: 2019/7/3 18:37
 * @Last Modified time: 2019/7/3 18:37
 * @Desc: 路由权限控制
 */
import router from '@/router'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const nickname = store.getters.nickname
      if (nickname) {
        next()
      } else {
        store.dispatch('user/getUserInfo').then(() => {
          next()
        }).catch((err) => {
          Message.error(err)
        })
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
