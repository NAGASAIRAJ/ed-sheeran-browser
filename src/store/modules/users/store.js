import actions from './actions'
import mutations from './mutations'

const state = () => ({
  users: []
})

const getters = {
  getUsers: (state) => state.users || []
}

const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default module
