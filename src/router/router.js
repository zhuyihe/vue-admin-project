import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'
Vue.use(Router)
    // 路由懒加载
const getComponent = (name, component) => () =>
    import (`@/views/${name}/${component}.vue`);
const myRouter = new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: getComponent('login', 'index')
        },
        {
            path: '/',
            redirect: '/login',
            component: getComponent('login', 'index')
        },
        {
            path: '/home',
            component: getComponent('layout', 'Layout'),
            children: [{
                    path: '/home',
                    component: getComponent('home', 'index'),
                    meta: {
                        title: '首页'
                    }
                },
                {
                    path: '/elementIcom',
                    component: getComponent('icons', 'elementIcom'),
                    meta: {
                        title: 'element'
                    }
                },
                {
                    path: '/iconfont',
                    component: getComponent('icons', 'iconfont'),
                    meta: {
                        title: 'iconfont'
                    }
                },
                {
                    path: '/editor',
                    component: getComponent('component', 'editor'),
                    meta: {
                        title: '富文本编译器'
                    }
                },
                {
                    path: '/countTo',
                    component: getComponent('component', 'countTo'),
                    meta: {
                        title: '数字滚动'
                    }
                },
                {
                    path: '/tree',
                    component: getComponent('component', 'tree'),
                    meta: {
                        title: '自定义树'
                    }
                },
                {
                    path: '/treeTable',
                    component: getComponent('component', 'treeTable'),
                    meta: {
                        title: '表格树'
                    }
                },
                {
                    path: '/treeSelect',
                    component: getComponent('component', 'treeSelect'),
                    meta: {
                        title: '下拉树'
                    }
                },
                {
                    path: '/draglist',
                    component: getComponent('draggable', 'draglist'),
                    meta: {
                        title: '拖拽列表'
                    }
                },
                {
                    path: '/dragtable',
                    component: getComponent('draggable', 'dragtable'),
                    meta: {
                        title: '拖拽表格'
                    }
                },
                {
                    path: '/cricle',
                    component: getComponent('charts', 'cricle'),
                    meta: {
                        title: '饼图'
                    }
                },
                {
                    path: '/formDesign',
                    component: getComponent('formDesign', 'index'),
                    meta: {
                        title: '表单生成器'
                    }
                },
                {
                    path: '/permission',
                    component: getComponent('permission', 'permission'),
                    meta: {
                        title: '菜单权限',
                        roles: ['admin']
                    }
                },
                {
                    path: '/permissionBtn',
                    component: getComponent('permission', 'permissionBtn'),
                    meta: {
                        title: '按钮权限',
                    }
                },
                {
                    path: '/404',
                    component: getComponent('error', '404'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: getComponent('error', '403'),
                    meta: {
                        title: '403'
                    }
                }
            ]
        }, {
            path: '*',
            redirect: '/404',
        }
    ]
})

//判断是否存在token
myRouter.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.path !== '/login' && !store.state.token) {
        next('/login')
        NProgress.done() // 结束Progress
    } else {
        next();
    }
    if (to.meta.roles) {
        to.meta.roles.includes(...store.getters.roles) ? next() : next('/404')
    } else {
        next();
    }
})

myRouter.afterEach(() => {
    NProgress.done() // 结束Progress
})
export default myRouter