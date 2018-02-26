<template>
   <div class=" right-chat-container">

     <div class="chat-main-container">

       <div class="chat-main-header">
         <div class="room-name">Abhinandan Panigrahi</div>
         <div class="room-controls">
           <div class="room-control-element">
             star
           </div>
           <div class="room-control-element">
             online?
           </div>
           <div class="room-control-element">
             description goes here
           </div>
         </div>
       </div>

      <div class="chat-thread-content">
        <div v-for="x in 10" class="chat-thread-unit">
          <div class="user-profile-picture">

          </div>
          <div class="user-chat-content">
            <div class="user-thread-unit-user">User Name {{x}}</div>
            <div class="user-thread-unit-post-time">Time {{x}}</div>
            <div>
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

      <div class="chat-input-container">
        <div class="chat-input-controls">
          <div class="chat-control-element">
            +
          </div>

          <div class="chat-control-element" style="width:90%">
            <div contenteditable="">asdasd</div>
          </div>

          <div class="chat-control-element " style="float:right">
            <div class="emoji-activate-button" @click="choosingEmoji=!choosingEmoji">Emoji</div>
            <div class="emoji-picker">
              <Picker v-if="choosingEmoji"
              :emoji-size="emojiSize"
              :per-line="perLine"
              :skins="skin"
              :native="native"
              :set="set"
              :auto-focus="autoFocus"
              :include="include"
              :exclude="exclude"
              :onItemClick="setEmoji"
              title="Ed Sheeran"
            />
            </div>

          </div>
        </div>
      </div>

     </div>
    </div>
</template>

<script>
import { Picker } from 'vue-emoji-mart'

export default {
  components: { Picker },
  data () {
    return {
      emojiSize: 24,
      perLine: 9,
      skin: 4,
      native: false,
      set: 'facebook',
      hidden: false,
      currentEmoji: { id: '+1' },
      autoFocus: true,
      include: [],
      exclude: [],
      choosingEmoji: false
    }
  },
  methods: {
    setEmoji (emoji) {
      console.log(emoji)
    }
  }
}
</script>

<style>
.emoji-activate-button{
  width:48px;
  float: right;
  display: inline-block;
  width:40px;
}
.emoji-picker{
  width: 220px;
    position: absolute;
    top: -432px;
    right: 140px;
}
.chat-control-element{
  box-sizing: border-box;
  display:inline-block;
  width:48px;
  height:100%;
  border-right:1px solid black;
  float: left;
}
.chat-input-controls{
  width:98%;
  margin:auto;
  border:1px solid black;
  box-sizing: border-box;
  height:40px;
  margin-top:20px;
  border-radius:8px;
  overflow: hidden;
}
.user-thread-unit-user{
  font-weight: 700;
  padding-bottom: 10px;
  font-size: 1.1em;
  display: inline;
}
.user-thread-unit-post-time{
  font-size:0.8em;
  display: inline;
  color:grey;
  padding-left:6px;
}
.chat-thread-unit{

  display: inline-block;
  box-sizing: border-box;
  margin-bottom:10px;

}
.user-chat-content{
  box-sizing: border-box;
  display:inline-block;
  width:calc(100% - 64px);
  float: right;
  clear:both;
  padding:6px 10px;
}
.user-profile-picture{
  box-sizing: border-box;
  display: inline-block;
  margin-left:10px;
  margin-top:10px;

  width:44px;
  height:44px;
  border:1px solid black;
}
.chat-thread-content{
  width:100%;
  height:calc(100% - 160px);
  overflow-y: scroll;
  top:80px;
  left:0px;
  position: absolute;

}
.chat-input-container{
  background-color:#fafafa;
  left:0;
  box-sizing: border-box;
  width:100%;
  position: absolute;
  bottom:0px;
  height:80px;
  border-top:1px solid #dbd9d9;
}
.room-control-element{
  display:inline;
}
  .room-controls{
    display: inline-block;
  }
  .room-name{
    font-weight: 700;
    padding-top:10px;
    font-size: 1.2em;
  }
  .chat-main-header{
    box-sizing: border-box;
    padding-left: 20px;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #d7d0d0;
    position: absolute;
    top:0px;
    left:0px
  }
  .chat-main-container{
    width:100%;
    box-sizing: border-box;
    padding-left:20px;
  }
  .right-chat-container{
    overflow: hidden;
    position: absolute;
    left:250px;
    top:0px;
    min-width:500px;
    width:calc(100% - 250px);
    height:100%;
    background:white;
  }

/*
 *  STYLE 6
 */

.chat-thread-content::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.chat-thread-content::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.chat-thread-content::-webkit-scrollbar-thumb
{
	background-color: #F90;
	background-image: -webkit-linear-gradient(45deg,
	                                          rgba(255, 255, 255, .2) 25%,
											  transparent 25%,
											  transparent 50%,
											  rgba(255, 255, 255, .2) 50%,
											  rgba(255, 255, 255, .2) 75%,
											  transparent 75%,
											  transparent)
}
</style>
