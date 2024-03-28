import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '@/supabase';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue')
    },
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
      component: () => import('../views/TeamSettingsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: () => import('../views/RankingsView.vue')
    },
    {
      path:'/matchs',
      name:'matchs',
      component: () => import('../views/MatchsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
        path:'/matchCreation',
        name:'matchCreation',
        component: () => import('../views/MatchCreationView.vue'),
        meta: {
          requiresAuth: true
        }
    },
    {
      path:"/:pathMatch(.*)*",
      redirect: '/'
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getSession()
  const isLoggedIn = !!data.session // !! is not null
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !isLoggedIn)
    next({ name: 'login' })
  else
    next()
})

export default router