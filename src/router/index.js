import Vue from 'vue'
import VueRouter from 'vue-router'
import _import from './_import'
import Layout from '../views/layout/Layout'
import LayoutTwo from '../views/layout/LayoutTwo'
import Home from '../views/home/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Index',
        component: Layout,
        children: [
            {
                path: '/Index',
                name: 'Index',
                component: () => import('@/views/home/index'),//该引用方法为异步组件加载方法。按需加载
                meta: {
                    isShowSideBar: false,//是否展示菜单栏
                    isHeader: true,//是否头部菜单
                    title:'我的工作台',
                }
            },
        ]
    },
    {
        path: '/PersonCenter',
        component: Layout,
        children: [
            {
                path: '/PersonCenter',
                name: 'PersonCenter',
                component: () => import('@/views/personcenter/index'),
                meta: {
                    isShowSideBar: true,
                    isHeader: true,
                    title:'个人中心',
                }
            },
        ]
    },
    {
        path: 'typeScript',
        component: LayoutTwo,
        redirect: 'noredirect',
        children: [
            {
                path: '/typeScript/page1',
                name: 'page1',
                component: () => import('@/views/typeScript/page1'),
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
