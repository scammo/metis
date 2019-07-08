import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/main.scss'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  const currentUser = store.state.auth.user
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log(to.matched)
  if (requiresAuth && !currentUser) {
    next({ name: 'login' })
  } else {
    next()
  }
})

store.dispatch('auth/authenticate')
  .catch(() => {})
  .then(() => {
    // eslint-disable-next-line no-new
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
