import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import History from '../views/History.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/History',
    name: 'History',
    component: History,
    children: [
      {
        path: '/HistoryDetail/:id',
        name: 'HistoryDetail',
        component: () => import('@/views/HistoryDetail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
