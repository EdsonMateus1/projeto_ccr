import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Sigin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sigin.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
