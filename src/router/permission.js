import router from './router'
import { asyncRouter } from './router'
import store from '../store/store'
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'
/**
* 通过meta.role判断是否与当前用户权限匹配
* @param roles
* @param route
*/
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return true
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
    const res = []
    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRouter(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res
}



//判断是否存在token
router.beforeEach((to, from, next) => {
    console.log(to)
    NProgress.start()
    // let roles = store.state.roles
    // console.log(roles)
    if (to.path !== '/login' && !store.state.token) {
      next('/login')
      NProgress.done() // 结束Progress
    }else{
        let addRouters=filterAsyncRouter(asyncRouter,store.state.roles)
        store.commit('COMMIT_ROUTERS',addRouters)
        let routes=store.getters.addRouters
        router.addRoutes(routes)
        console.log(routes)
    }
    next()
  })
  router.afterEach(() => {
    NProgress.done() // 结束Progress
  })

// console.log(asyncRouter)