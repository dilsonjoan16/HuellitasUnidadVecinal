import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acceso',
    name: 'Acceso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Acceso.vue')
  },
  {
    path: '/internet',
    name: 'Internet',
    component: () => import('../views/Internet.vue')
  },
  {
    path: '/transporte',
    name: 'Transporte',
    component: () => import('../views/Transporte.vue')
  },
  {
    path: '/aplicacion',
    name: 'Aplicacion',
    component: () => import('../views/Aplicacion.vue')
  },
  {
    path: '/protocolo-general',
    name: 'General',
    component: () => import('../views/General.vue')
  },
  {
    path: '/cuestionario',
    name: 'Cuestionario',
    component: () => import ('../views/Cuestionario.vue')
  },
  {
    path: '/capas',
    name: 'Capas',
    component: () => import ('../views/Capas.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
