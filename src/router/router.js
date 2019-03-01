import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css' 
Vue.use(Router)
// 路由懒加载
const getComponent = (name,component) => () => import(`@/views/${name}/${component}.vue`);
const myRouter=new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: getComponent('login','index')
    },
    {
      path: '/login',
      name: 'login',
      component: getComponent('login','index')
    },
    {
      path: '/',
      component:getComponent('layout','Layout'),
      children:[{
        path:'/home',
        name:'home',
        component: getComponent('home','index'),
        meta:{title:'首页'}
      },{
        path:'/icon',
        component: getComponent('icons','index'),
        name:'icon',
        meta:{title:'自定义图标'}
      }]
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