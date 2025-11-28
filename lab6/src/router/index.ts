import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Bai1 from '../views/Bai1.vue';
import Bai2 from '../views/Bai2.vue';
import Bai3 from '../views/Bai3.vue';
import Bai4 from '../views/Bai4.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bai1',
      name: 'Bai1',
      component: Bai1,
    },
    {
      path: '/bai2',
      name: 'Bai2',
      component: Bai2,
    },
    {
      path: '/bai3',
      name: 'Bai3',
      component: Bai3,
    },
    {
      path: '/bai4',
      name: 'Bai4',
      component: Bai4,
    },
  ],
});

export default router;
