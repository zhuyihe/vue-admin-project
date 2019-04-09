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
      },
      {
        path:'/icon',
        component: getComponent('icons','index'),
        name:'icon',
        meta:{title:'自定义图标'}
      },
      {
        path:'/editor',
        component: getComponent('component','editor'),
        name:'editor',
        meta:{title:'富文本编译器'}
      },
      {
        path:'/countTo',
        component: getComponent('component','countTo'),
        name:'countTo',
        meta:{title:'数字滚动'}
      },
      {
        path:'/tree',
        component: getComponent('component','tree'),
        name:'tree',
        meta:{title:'自定义树'}
      },
      {
        path:'/treeTable',
        component: getComponent('component','treeTable'),
        name:'treeTable',
        meta:{title:'表格树'}
      },
      {
        path:'/treeSelect',
        component: getComponent('component','treeSelect'),
        name:'treeSelect',
        meta:{title:'下拉树'}
      },
      {
        path:'/draglist',
        component: getComponent('draggable','draglist'),
        name:'draglist',
        meta:{title:'拖拽列表'}
      },
      {
        path:'/dragtable',
        component: getComponent('draggable','dragtable'),
        name:'dragtable',
        meta:{title:'拖拽表格'}
      },
      {
        path:'/cricle',
        component: getComponent('charts','cricle'),
        name:'cricle',
        meta:{title:'饼图'}
      },
    ]
    }
  ]
})
//判断是否存在token
myRouter.beforeEach((to,from,next)=>{
  NProgress.start()
  if (to.path !== '/login' && !store.state.token) {
     next('/login')
     NProgress.done() // 结束Progress
  }
  next()
})
myRouter.afterEach(() => {
  NProgress.done() // 结束Progress
})
export default myRouter