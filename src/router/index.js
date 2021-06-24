import { createRouter, createWebHistory } from 'vue-router'
import I from '../views/I.vue'

const routes = [
  {
    path: '/',
    name: 'I',
    component: I
  },
  {
    path: '/Education',
    name: 'Education',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Education.vue')
  },
  {
    path: '/Works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
