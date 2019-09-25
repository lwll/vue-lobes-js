import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
// import iView from 'iview'
import SvgIcon from 'vue-svgicon'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/icons/components/index'

// import 'iview/dist/styles/iview.css'
// import '../my-theme/index.less'
import './style/index.scss'
import 'swiper/dist/css/swiper.css'
import 'animate.css'
// import './element-variables.scss'
// import '@/style/element-variables.scss'

import '@/permission'

// Vue.use(iView)
Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svgicon'
})
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

function calculateFontSize() {
  document.documentElement.style.fontSize = `${document.body.clientWidth / (1920 / 20)}px`
}

new Vue({
  router,
  store,
  created: function() {
    calculateFontSize()
    window.onresize = calculateFontSize
  },
  render: h => h(App)
}).$mount('#app')
