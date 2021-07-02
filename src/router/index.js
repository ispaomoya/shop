import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import("../views/home/home")
const classify = () => import("../views/classify/classify")
const shopcart = () => import("../views/shopcart/shopcart")
const profile = () => import("../views/profile/profile")
const detail = () => import("../views/detail/detail")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
    
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
