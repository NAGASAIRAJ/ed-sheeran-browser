<template>
  <div>
    <div class="chat-main-container">

       <div class="chat-main-header">
         <div class="room-name">Pranay Kothapalli <span class="user-name-attached">(@kotAPI)</span> </div>
         <div class="room-controls">
           <div class="room-control-element starred-icon active-star-icon" v-html="favoriteChat?heartActiveIcon:heartInactiveIcon " @click="makeFavoriteChat">

           </div>
           <div class="room-control-element">
             <span class="available-status-icon"></span>
             <span>available</span>
           </div>
           <div class="room-control-element room-description-content">
             I'm a pickle!
           </div>
         </div>
       </div>

      <div class="chat-thread-content">
        <div v-for="x in 10" class="chat-thread-unit">
          <div class="user-profile-picture" style="background-image:url(http://dp.topcovers4fb.com/wp-content/uploads/2015/08/Forever-In-Love-Display-Picture.jpeg)">

          </div>
          <div class="user-chat-content">
            <div class="user-thread-unit-user">Pranay Kothapalli {{x}}</div>
            <div class="user-thread-unit-post-time">22:00 AM</div>
            <div class="user-thread-post-content">
            Notification.vibrate Read only
Specifies a vibration pattern for devices with vibration hardware to emit.
Unsupported properties
The following properties are listed in the most up-to-date spec but are not supported in any browsers yet. It is advisable to keep checking back regularly to see if the status of these has updated, and let us know if you find any out of date information.

Notification.noscreen Read only
Specifies whether the notification firing should enable the device's screen or not.
Notification.sound Read only
Specifies a sound resource to play when the notification fires, in place of the default system notification sound.
Notification.sticky Read only
Specifies whether the notification should be 'sticky', i.e. not easily clearable by the user.
Event handlers
Notification.onclick
A handler for the click event. It is triggered each time the user clicks on the notification.
Notification.onerror
A handler for the error event. It is triggered each time the notification encounters an error.
Obsolete handlers
            </div>
          </div>
          <div>

          </div>
        </div>
     </div>
  </div>
  </div>
</template>

<script>
import icons from '@/components/Assets/SVGIcons/Icons.js'
export default {
  data () {
    return {
      heartActiveIcon: icons.heartActiveIcon,
      heartInactiveIcon: icons.heartInactiveIcon,
      favoriteChat: false
    }
  },
  methods: {
    makeFavoriteChat () {
      this.favoriteChat = !this.favoriteChat
    }
  }
}
</script>

<style>
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
