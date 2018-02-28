import actions from './actions'
import mutations from './mutations'

const state = () => ({
  roomList: [],
  activeChannelSelectionId: undefined,
  activeUserSelectionId: undefined,
  currentActiveRoom: {}
})

const getters = {
  getRooms: (state) => state.roomList || [],
  getCurrentActiveRoom: (state, getters, rootState) => {
    if (state.currentActiveRoom.type === 'channel') {
      var rooms = getters.getRooms
      for (var x in rooms) {
        if (rooms[x].id === state.currentActiveRoom.id) {
          return rooms[x]
        }
      }
    } else if (state.currentActiveRoom.type === 'user') {
      let userID = Number(state.currentActiveRoom.id)
      let userAPIObj = {}
      var userList = rootState.users.users
      for (var x in userList) {
        if (Number(userList[x].id) === userID) {
          userAPIObj = userList[x]
        }
      }
      //
      var userObj = {}
      userObj.type = 'user'
      userObj.name = userAPIObj.displayName
      //
      return userObj
      //
    } else {
      return {}
    }
  },
  getCurrentActiveChannelSelectionId: (state) => state.activeChannelSelectionId || undefined,
  getCurrentActiveUserSelectionId: (state) => state.activeUserSelectionId || undefined
}

const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default module
