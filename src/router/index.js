import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SaveView from '../views/SaveView.vue'
import LoadView from '../views/LoadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/saves',
      name: 'SaveDraw',
      component: SaveView,
    },
    {
      path: '/load',
      name: 'LoadDraw',
      component: LoadView,
    },
  ]
})

export default router
