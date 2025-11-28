import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import ProfileInfo from '../views/ProfileInfo.vue'
import ProfileSettings from '../views/ProfileSettings.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile,
      alias: '/me',
      redirect: { name: 'ProfileInfo' },
      children: [
        {
          path: 'info',
          name: 'ProfileInfo',
          component: ProfileInfo
        },
        {
          path: 'settings',
          name: 'ProfileSettings',
          component: ProfileSettings
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (_to, _from, next) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
        
        if (isAuthenticated) {
          next()
        } else {
          next({ name: 'Login' })
        }
      }
    }
  ]
})

export default router
