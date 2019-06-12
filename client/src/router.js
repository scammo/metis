import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('./views/Details.vue')
    },
    {
      path: '/settings/workgroups',
      name: 'workgroups',
      component: () => import('./views/WorkGroups.vue')
    },
    {
      path: '/settings/warehouselocation',
      name: 'workgroups',
      component: () => import('./views/WorkGroups.vue')
    }
  ]
})
