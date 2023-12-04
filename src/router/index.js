import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import Calendar from '@/views/Calendar.vue'
import Players from '@/views/Players.vue'
import News from '@/views/News.vue'
import Settings from '@/views/Settings.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/players',
      name: 'players',
      component: Players
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ]
})

export default router

