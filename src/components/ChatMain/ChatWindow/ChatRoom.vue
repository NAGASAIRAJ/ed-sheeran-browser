<template>
  <div>
    <div class="chat-main-container">

       <div class="chat-main-header">
         <div class="room-name">
           <span>{{roomObj.name}} </span>
           <span class="user-name-attached" v-if="roomObj.type==='user'">@username</span>
        </div>
         <div class="room-controls">
           <div class="room-control-element starred-icon active-star-icon"
            v-html="roomObj.favorite?heartActiveIcon:heartInactiveIcon "
            @click="makeFavoriteChat">
           </div>
           <div class="room-control-element">
             <span v-if="roomObj.type=='user'" class="available-status-icon"></span>
             <span v-if="roomObj.type=='user'">{{roomObj.userStatus}}available</span>
           </div>
           <div class="room-control-element room-description-content">
            {{roomObj.description}}
           </div>
         </div>
       </div>
       <ChatThread :messages="messagesObj"/>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ChatThread from './ChatThread'
import icons from '@/components/Assets/SVGIcons/Icons.js'
export default {
  components: {ChatThread},
  props: ['roomObj'],
  data () {
    return {
      messagesObj: [
        {'id': '1',
          'text': 'Hi @suprememoocow !',
          'html': '<span>Hi @suprememoocow !</span> `abc`',
          'sent': '2014-03-25T11:51:32.289Z',
          'editedAt': '2014-03-25T12:13:02.985Z',
          'fromUser': {
            'id': '1',
            'username': 'suprememoocow',
            'displayName': 'Andrew Newdigate',
            'url': '/suprememoocow',
            'avatarUrlSmall': 'https://avatars.githubusercontent.com/u/594566?',
            'avatarUrlMedium': 'https://avatars.githubusercontent.com/u/594566?'
          },
          'unread': false,
          'readBy': 0,
          'mentions': [{'screenName': 'suprememoocow', 'userId': '53307831c3599d1de448e19a'}]
        }
      ],

      heartActiveIcon: icons.heartActiveIcon,
      heartInactiveIcon: icons.heartInactiveIcon,
      favoriteChat: false
    }
  },
  computed: {
    ...mapGetters('rooms', [
      'getRooms'
    ])
  },
  methods: {

    makeFavoriteChat () {
      this.favoriteChat = !this.favoriteChat
    }
  },
  mounted () {

  }
}
</script>

<style>
.chat-thread-unit {
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
}

svg{
  position: relative;
  height:100%;
  width:100%;
}
.starred-icon{
  height:18px;
  width:18px;
  margin-right:10px;
  cursor: pointer;
}
.available-status-icon{
    display: inline-block;
    height: 12px;
    width: 12px;
    margin-top: 6px;
    margin-right:6px;
    border-radius: 100px;
    background-color: #8bc34a;
}

.user-name-attached{
  color:grey;
  font-size:0.6em;
}
.room-description-content{
  font-family: 'Arvo', serif;
  color:grey;
  padding-left: 10px;
  font-size: 0.8em;
}
.chat-main-container {
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
}
.chat-main-header {
  box-sizing: border-box;
  padding-left: 20px;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #d7d0d0;
  position: absolute;
  top: 0px;
  left: 0px;
}
.room-control-element {
  display: inline-flex;
  height:24px;
  line-height: 24px;
}
.room-controls {
  display: inline-flex;
}
.room-name {
  font-weight: 500;
  padding-top: 10px;
  font-size: 1.2em;
  font-family: 'Arvo', serif;
}
.user-chat-content {
  box-sizing: border-box;
  display: inline-block;
  width: calc(100% - 64px);
  float: right;
  clear: both;
  padding: 6px 10px;
}
.user-profile-picture {
  box-sizing: border-box;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;

  width: 44px;
  height: 44px;
  background-size:cover;
}

.user-thread-unit-user {
  font-weight: 700;
  padding-bottom: 10px;
  font-size: 0.9em;
  display: inline;
  font-family: 'Arvo', serif;
}
.chat-thread-content {
  width: 100%;
  height: calc(100% - 160px);
  overflow-y: scroll;
  top: 80px;
  left: 0px;
  position: absolute;
}

 .user-thread-post-content{
    font-family: 'Assistant', sans-serif;
  }

</style>
