import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue' 

const routes = [
  {
    path: '/',  
    name: 'App',
    component: App,  
  },
  {
    path: '/footer',
    name: 'FooterComponent',
    component: 'FooterComponent',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
