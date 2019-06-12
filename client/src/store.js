import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathers from './api'
const { service, auth, FeathersVuex } = feathersVuex(feathers, { idField: '_id' })

Vue.use(Vuex)
Vue.use(FeathersVuex)

export default new Vuex.Store({
  plugins: [
    service('user'),
    auth({ userService: 'user' })
  ],
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
