import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import i18n from './lang'
import './plugins/element.js'
import './directive/premissionBtn'
import './assets/css/public.css'
import './element-variables.scss'
import FormMaking from '@/views/formDesign/index'
import VueParticles from 'vue-particles'
import VueClipboard from 'vue-clipboard2'
import { messages } from './assets/js/common'
// 引入字体文件
import '@/assets/icon/iconfont.css'
import '@/assets/icon/iconfont.js'
Vue.use(VueParticles)
Vue.use(FormMaking)
Vue.use(VueClipboard)
//全局挂载提示框
Vue.prototype.$message = messages
Vue.config.productionTip = false
new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')