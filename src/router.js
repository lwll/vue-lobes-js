import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/',
      component: Layout,
      redirect: '/book',
      name: 'book',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [{
        path: 'book',
        component: () => import('./views/Book.vue')
      }] }
  ]
})
