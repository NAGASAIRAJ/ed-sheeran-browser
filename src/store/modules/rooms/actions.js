const actions = {
  LOAD_ROOMS ({state, commit}) {
    let rooms = [
      {
        id: 1,
        name: 'JavaScript',
        type: 'channel',
        favorite: true,
        unreadItems: 0,
        metions: 0,
        uri: '',
        description: 'A channel to up your JavaScripting Game',
        users: [],
        lastAccessTime: 'time'
      },
      {
        id: 2,
        name: 'HTML',
        type: 'channel',
        favorite: false,
        unreadItems: 0,
        metions: 0,
        uri: '',
        description: 'A channel to up your HTML Game',
        users: [],
        lastAccessTime: 'time'

      },
      {
        id: 3,
        name: 'CSS',
        type: 'channel',
        favorite: true,
        unreadItems: 0,
        metions: 0,
        uri: '',
        description: 'A channel to up your CSS Game',
        users: [],
        lastAccessTime: 'time'
      }
    ]
    commit('SET_ROOMS', rooms)
  },
  UPDATE_CURRENT_ACTIVE_ROOM ({state, commit}, roomObj) {
    commit('SET_CURRENT_ACTIVE_ROOM', roomObj)
  },
  UPDATE_CURRENT_ACTIVE_CHANNEL_SELECTION_ID ({state, commit}, channelID) {
    commit('SET_CURRENT_ACTIVE_CHANNEL_SELECTION_ID', channelID)
  },
  UPDATE_CURRENT_ACTIVE_USER_SELECTION_ID ({state, commit}, userID) {
    commit('SET_CURRENT_ACTIVE_USER_SELECTION_ID', userID)
  }
}

export default actions
