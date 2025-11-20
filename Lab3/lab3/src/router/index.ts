import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Post from '../views/Post.vue'
import PostDetail from '../views/PostDetail.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/post', name: 'Post', component: Post },
  { path: '/postdetail', name: 'PostDetail', component: PostDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
