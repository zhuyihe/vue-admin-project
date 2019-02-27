import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import { from } from 'array-flatten';
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
      name: 'home',
      component:getComponent('Home')
    }
  ]
})
//判断是否存在access_token
myRouter.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  console.log(next)
})
export default myRouter