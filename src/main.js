import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'
import './assets/css/normalize.css'
import './assets/css/public.css'
import '@/element-variables.scss'
// import './assets/scss/global.scss'
// 引入字体文件
import '@/assets/icon/iconfont.css'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
