import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/teamSettings',
      name: 'teamSettings',
      component: () => import('../views/TeamSettingsView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: 'rankings',
      name: 'rankings',
      component: () => import('../views/RankingsView.vue')
    },
    {
      path:'/matchs',
      name:'matchs',
      component: () => import('../views/MatchsView.vue')
    },
    {
        path:'matchCreation',
        name:'matchCreation',
        component: () => import('../views/MatchCreationView.vue')
    }
  ]
})

export default router