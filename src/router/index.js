import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/home/One.vue'
import Two from '../views/home/Two.vue'

import Config from '../views/me/Config.vue'
import Qita from '../views/me/Qita.vue'
import Guanli from '../views/me/Guanli.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect:"/home/one",
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/home/one',
        name: 'One',
        component: One,
      },
      {
        path: '/home/two',
        name: 'Two',
        component: Two,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue'),
    children:[
      {
        path: '/me/config',
        name: 'Config',
        component: Config,
      },
      {
        path: '/me/guanli',
        name: 'Guanli',
        component: Guanli,
      },
      {
        path: '/me/qita',
        name: 'Qita',
        component: Qita,
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../components/Detail.vue')
  },
  {
  path: '*',
  redirect:"/home/one"
  }
]

const router = new VueRouter({
  routes
})



//路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path==="/about")  return next()
  //获取token
  const tonkenstr = window.sessionStorage.getItem("token")
  if(!tonkenstr) return next("/about")
  next()
})
export default router
