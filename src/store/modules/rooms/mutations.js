const mutations = {
  SET_ROOMS (state, rooms) {
    state.roomList = rooms
  },
  SET_CURRENT_ACTIVE_ROOM (state, roomObj) {
    state.currentActiveRoom = roomObj
  },
  SET_CURRENT_ACTIVE_CHANNEL_SELECTION_ID (state, channelID) {
    state.activeChannelSelectionId = channelID
  },
  SET_CURRENT_ACTIVE_USER_SELECTION_ID (state, userID) {
    state.activeUserSelectionId = userID
  }
}

export default mutations
