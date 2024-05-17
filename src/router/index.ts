import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import MoviesView from '../views/MoviesView.vue'
import PeopleView from '../views/PeopleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView //() => import("./pages/HomeView.vue") }
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView
    }
  ]
})

export default router
