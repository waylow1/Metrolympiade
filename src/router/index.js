import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
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
      path: '/rankings',
      name: 'rankings',
      component: () => import('../views/RankingsView.vue')
    },
    {
      path:'/matchs',
      name:'matchs',
      component: () => import('../views/MatchsView.vue')
    },
    {
        path:'/matchCreation',
        name:'matchCreation',
        component: () => import('../views/MatchCreationView.vue')
    }
  ]
})

export default router