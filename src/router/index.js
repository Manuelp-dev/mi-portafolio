import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: () => import('../views/HomeView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router