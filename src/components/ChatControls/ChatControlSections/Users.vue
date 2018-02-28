<template>
  <div>
      <ul class="channels-list">

        <span class="channel-list-title">DIRECT MESSAGES ({{getUsers.length}})</span>
          <li v-for="x in getUsers"
              :class="applyChannelClasses(x)"
              @click="setActiveRoom(x)"
              :key="x.id"
              >{{x.displayName}}</li>

        </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      currentActiveRoom: undefined
    }
  },
  computed: {
    ...mapGetters('users', [
      'getUsers'
    ]),
    ...mapGetters('rooms', [
      'getCurrentActiveChannelSelectionId',
      'getCurrentActiveUserSelectionId'
    ])
  },
  methods: {
    ...mapActions('users', [
      'LOAD_USERS'
    ]),
    ...mapActions('rooms', [
      'UPDATE_CURRENT_ACTIVE_ROOM', 'UPDATE_CURRENT_ACTIVE_CHANNEL_SELECTION_ID',
      'UPDATE_CURRENT_ACTIVE_USER_SELECTION_ID', 'UPDATE_CURRENT_ACTIVE_ROOM'
    ]),
    setActiveRoom (x) {
      let currentUser = x
      var obj = {}
      obj.id = currentUser.id
      obj.type = 'user'
      //
      this.UPDATE_CURRENT_ACTIVE_CHANNEL_SELECTION_ID(undefined)
      this.UPDATE_CURRENT_ACTIVE_USER_SELECTION_ID(Number(x.id))
      this.UPDATE_CURRENT_ACTIVE_ROOM(obj)
    },
    applyChannelClasses (obj) {
      var classes = ['channel-list-element']
      if (Number(obj.id) === this.getCurrentActiveUserSelectionId) {
        classes.push('channel-active-element')
      }
      return classes.join(' ')
    }
  },
  mounted () {
    this.LOAD_USERS()
  }
}
</script>
