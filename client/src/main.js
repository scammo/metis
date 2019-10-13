import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/main.scss'
import BootstrapVue from 'bootstrap-vue'
import VueInitialsImg from 'vue-initials-img'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueInitialsImg)

const requireLayoutComponents = require.context(
  './layouts', false, /\.vue$/
)

requireLayoutComponents.keys().forEach(fileName => {
  const componentConfig = requireLayoutComponents(fileName)
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

const requireBasicComponents = require.context(
  './components', false, /Basic[A-Z]\w+\.vue$/
)
requireBasicComponents.keys().forEach(fileName => {
  const componentConfig = requireBasicComponents(fileName)
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

if (process && process.env) {
  const commitHash = process.env.VUE_APP_COMMIT_HASH || 'none'
  const version = process.env.VUE_APP_VERSION || 'x.x.x'
  store.commit('setCommitHash', commitHash)
  store.commit('setVersion', version)
}

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
