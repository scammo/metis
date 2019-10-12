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
      component: Login,
      meta: { layout: 'login' }
    },
    {
      path: '/box/:boxId',
      name: 'box',
      component: () => import('./views/BoxDetails.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/workgroups',
      name: 'workgroups',
      component: () => import('./views/SettingsWorkGroups.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/warehouselocation',
      name: 'warehouselocation',
      component: () => import('./views/SettingsWarehouseLocation.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/boxtypes',
      name: 'users',
      component: () => import('./views/SettingsBoxtypes.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/users',
      name: 'users',
      component: () => import('./views/SettingsUsers.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings', redirect: { name: 'warehouselocation' } }
  ]
})
