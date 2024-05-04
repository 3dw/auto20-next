import { createRouter, createWebHistory } from 'vue-router'
import Hello from '@/components/Hello'
// import Work from '@/components/Work'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
