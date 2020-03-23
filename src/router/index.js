import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pageA from '../views/pageA'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/pageA'//重定向根目录指向pageA
  },
  {
    path: '/pageA/:id',
    name: 'pageA',
    // props:true,//设置props属性，获取路由的变量和普通的属性传递没区别
    component: pageA
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')//该引用方法为异步组件加载方法。按需加载
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
