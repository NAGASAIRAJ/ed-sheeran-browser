<template>
  <div>
        <ul class="channels-list">
          <span class="channel-list-title">CHANNELS ({{getRooms.length}})</span>
            <li v-for="x in getRooms"
                :class="applyChannelClasses(x)"
                :key="x.id"
                @click="setActiveChannel(x.id)"
                ># {{x.name}}</li>
          </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      activeChannelId: undefined
    }
  },
  computed: {
    ...mapGetters('rooms', [
      'getRooms', 'getCurrentActiveChannelSelectionId'
    ])
  },
  methods: {
    ...mapActions('rooms', [
      'LOAD_ROOMS', 'UPDATE_CURRENT_ACTIVE_ROOM', 'UPDATE_CURRENT_ACTIVE_CHANNEL_SELECTION_ID',
      'UPDATE_CURRENT_ACTIVE_USER_SELECTION_ID'
    ]),

    setActiveChannel (channelID) {
      this.UPDATE_CURRENT_ACTIVE_CHANNEL_SELECTION_ID(Number(channelID))
      for (var x in this.getRooms) {
        if (this.getRooms[x].id === this.getCurrentActiveChannelSelectionId) {
          /// object start
          var obj = {}
          obj.id = channelID
          obj.type = 'channel'
          /// object end
          this.UPDATE_CURRENT_ACTIVE_ROOM(obj)
        }

        this.UPDATE_CURRENT_ACTIVE_USER_SELECTION_ID(undefined)
      }
    },
    applyChannelClasses (obj) {
      var classes = ['channel-list-element']
      if (Number(obj.id) === this.getCurrentActiveChannelSelectionId) {
        classes.push('channel-active-element')
      }
      return classes.join(' ')
    }
  },
  mounted () {
    this.LOAD_ROOMS()
  }
}
</script>

<style>
.channel-list-title{
  padding-left: 10px;
  font-family: 'Arvo', serif;
  font-weight: 100;
  font-size: 0.8em;
  margin-bottom: 2px;
  display: block;
}
.channel-active-element{
  color:black !important;
  background-color:white;
  font-weight: 700;
}
.channel-active-element:hover{
  color:black !important;
  background-color:white !important;
  font-weight: 700 !important;
}
.channels-list {
  margin-top: 22px;
  list-style: none;
  padding-left: 0px;
}
.channel-list-element {
  margin: 0px;
  padding: 0px;
  color: grey;
  padding-left: 12px;
  user-select: none;
  cursor: pointer;
  transition: all 0.4s;
  font-family: 'Assistant', sans-serif;
}
.channel-list-element:hover{
  transition:all 0s;
  background-color:rgba(255,255,255,0.2);
  color:white;
}
</style>
