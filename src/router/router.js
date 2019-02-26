import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
Vue.use(Router)
// 路由懒加载
const getComponent = (name) => () => import(`../views/${name}.vue`);
const myRouter=new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: getComponent('login')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
export default myRouter