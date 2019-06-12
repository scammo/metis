import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('./views/Details.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/workgroups',
      name: 'workgroups',
      component: () => import('./views/WorkGroups.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/warehouselocation',
      name: 'workgroups',
      component: () => import('./views/WorkGroups.vue'),
      meta: { requiresAuth: true }
    }
  ]
})
