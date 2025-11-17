import { createRouter, createWebHistory } from 'vue-router'
import Bai1 from '../views/bai1.vue'
import Bai2 from '../views/bai2_3_4.vue'

const routes = [
  { path: '/', redirect: '/bai1' },
  { path: '/bai1', name: 'Bai1', component: Bai1 },
  { path: '/bai2', name: 'Bai2', component: Bai2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
