<template>
   <div class="left-chat-container">
     <ChatSettings/>

          <div class="channel-container">
          <div class="user-profile row">
                  <div class="user-display-pic three columns"></div>
                  <div class="nine columns">

                    <div>
                      <div class="user-online-status"></div>
                      <div class="user-display-name">Pranay Kothapalli</div>
                      <div class="settings">></div>
                    </div>

                  </div>
                </div>
                  <div>
                      <ul class="channels-list">
                        CHANNELS (22)
                          <li v-for="x in 20" class="channel-list-element"># Channel  {{x}}</li>

                        </ul>
                </div>

                <div>
                      <ul class="channels-list">
                        DIRECT MESSAGES (22)
                          <li v-for="x in 20" class="channel-list-element"># User  {{x}}</li>

                        </ul>
            </div>
        </div>

    </div>
</template>

<script>

import ChatSettings from '@/components/ChatControls/ChatSettings'
export default {
  components: {ChatSettings}
}
</script>

<style>
.vue-scroll-track{
    background-color: #56595e !important;
    width: 10px !important;
}
.warp{
  height: 100%;
  overflow: hidden;
}
.channels-list{
  margin-top:22px;
    list-style: none;
    padding-left: 28px;
}
.channel-list-element{
  margin:0px;
  padding:0px;
  color:grey;
  padding-left:2px;
}
.user-online-status{
  width:12px;
  height:12px;
  background-color:#8bc34a;
  border-radius: 100px;
  display: inline;
  float: left;
  margin-top:6px;
  margin-right:5px;
}

.user-display-name{
  display: inline;
  float:left;
}
.settings{
  display: inline;
  float:right;
}
.user-display-pic{
  box-sizing: border-box;
  width:28px !important;
  height:28px;
  border-radius:100px;
  border:1px solid white;
  background-color:white;
  margin:auto;
  margin-top:10px;
}
  .user-profile{
    width: 232px;
    margin: auto;
    margin-top: 6px;
  }
  .left-chat-container{
    box-sizing: border-box;
    overflow-y: hidden;
    position: absolute;
    background-color:#1e222b;
    color:white;
    height:100%;
    width:250px;
  }

.channel-container{
  overflow-y: scroll;
  height: calc(100% - 54px);
}

  /*
 *  STYLE 6
 */

.channel-container::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.channel-container::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.channel-container::-webkit-scrollbar-thumb
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
