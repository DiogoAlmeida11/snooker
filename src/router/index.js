import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import Calendar from '@/views/Calendar.vue'
import Players from '@/views/Players.vue'
import News from '@/views/News.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PlayerDetail from '@/views/PlayerDetail.vue'
import GameDetails from '@/views/GameDetails.vue'
import NewsDetails from '@/views/NewsDetails.vue'
import Admin from '@/views/Admin.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {needsAuth: true},
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
      meta: {needsAuth: true},
    },
    {
      path: '/players',
      name: 'players',
      component: Players,
      meta: {needsAuth: true},
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    { 
      path: '/', 
      name: 'login', 
      component: LoginView 
    },
    { 
      path: '/register', 
      name: 'register', 
      component: RegisterView 
    },
    { path: '/player/:id', 
      name: 'player', 
      component: PlayerDetail, 
      props: true,
      meta: {needsAuth: true},
    },
    {
      path: '/game/:id',
      name: 'gameDetails',
      component: GameDetails,
      props: true,
      meta: {needsAuth: true},

    },
    {
      path: '/news/:id',
      name: 'news-details',
      component: NewsDetails,
      props: true,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {needsAuth: true},
    },
    {
      path: '/:patchMatch:(.*)*',
      name: 'pagenotfound',
      component: PageNotFound
    },

  ]

  
})


router.beforeEach((to, from) => {
  if (to.meta.needsAuth && !useUserStore().isUser) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    };
  }
});
export default router

