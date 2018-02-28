import Vue from 'vue'
import Vuex from 'vuex'

// modules
import rooms from './modules/rooms/store.js'
import users from './modules/users/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rooms,
    users
  }
})
