import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home.vue'
import login from '../views/login.vue'
import store from '../store/store'
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css' 
Vue.use(Router)
// 路由懒加载
const getComponent = (name) => () => import(`../views/${name}.vue`);
const myRouter=new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: getComponent('login')
    },
    {
      path: '/',
      name: 'layout',
      component:()=> import(`../views/layout/Layout.vue`)
    }
  ]
})
//判断是否存在access_token
myRouter.beforeEach((to,from,next)=>{
  NProgress.start()
  if (to.path !== '/login' && !store.state.access_token) {
     next('/login')
     NProgress.done() // 结束Progress
  }
  next()
})
myRouter.afterEach(() => {
  NProgress.done() // 结束Progress
})
export default myRouter