import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout'
import Guide from '../views/home/guide'

import TypeScript from './modules/typeScript'
import Vues from './modules/vue'
import Reacts from './modules/react'
import JavaScript from './modules/javaScript'
import Others from './modules/others'
import Interviews from './modules/interviews'
import DataStructures from './modules/dataStructures'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Guide',
        component: Guide,
        meta: {
            isInside: false,//是否是内页菜单
            title: '引导页',
        }
    },
    {
        path: '/Index',
        component: Layout,
        meta: {
            isInside: false,
            title: '引导页',
        },
        children: [
            {
                path: '/Index',
                name: 'Index',
                component: () => import('@/views/home/index'),//该引用方法为异步组件加载方法。按需加载
                meta: {
                    isShowSideBar: false,//是否展示侧边栏菜单栏
                    isHeader: true,//是否头部菜单
                    title: '首页',
                }
            },
        ]
    },
    {
        path: '/PersonCenter',
        component: Layout,
        meta: {
            isInside: false,
            title: '引导页',
        },
        children: [
            {
                path: '/PersonCenter',
                name: 'PersonCenter',
                component: () => import('@/views/personcenter/index'),
                meta: {
                    isShowSideBar: true,
                    isHeader: true,
                    title: '个人中心',
                }
            },
        ]
    },
    ...TypeScript,
    ...Vues,
    ...Reacts,
    ...JavaScript,
    ...Others,
    ...Interviews,
    ...DataStructures,
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    const routerList = JSON.parse(window.localStorage.getItem('sideBarRoutes'))||[]
    //在内页找不到存储的菜单时跳回首页
    if ((to.path !== '/'&&to.path !== '/Index')&&routerList.length<1) {
        next({path:'/Index'})
    } else {
        next()
    }
})

export default router
