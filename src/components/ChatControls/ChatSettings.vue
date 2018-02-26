<template>
  <div class="title-chat-container">
      <div class="title-chat-title">Edyst</div>
       <div class="settings-icon-container" >
         <span v-html="icons.settingIcon" class="setting-icon" @click="states.settingsVisible=!states.settingsVisible">{{icons.settingIcon}}</span>

       </div>

       <div class="settings-menu-container animated" v-if="states.settingsVisible">
           <ul>
             <li>A</li>
           </ul>
         </div>

     </div>
</template>

<script>
import icons from '@/components/Assets/SVGIcons/Icons.js'
export default {
  data () {
    return {
      icons: {
        settingIcon: icons.settingIcon
      },
      states: {
        settingsVisible: false
      }
    }
  }
}
</script>

<style>
.hide {
  display: hidden;
  z-index: -1;
  position: relative;
  right: 1000px;
  top: 10000px;
}
.settings-menu-container {
  position: fixed;
  width: 240px;
  height: 200px;
  top: 44px;
  left: 182px;
  background-color: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: block;
  z-index: 1000;
}
.settings-icon-container {
  margin-top: 5px;
  display: inline;
  float: right;
}
.title-chat-container {
  padding: 10px 10px 10px 10px;
  font-weight: 500;
  font-size: 1.4em;
  text-align: left;
  border-bottom: 1px solid #373737;
  font-family: "Russo One", sans-serif;
  background-color: #0c0d10;
}

.title-chat-title {
  display: inline-block;
}
.setting-icon > svg {
  width: 24px;
  height: 24px;
  line-height: 38px;
  fill: #a9a9aa;
  cursor: pointer;
  transition: all 0.2s;
  transform-origin: center;
}
.setting-icon > svg:hover {
  fill: white;
  transform: rotate(90deg);
}
.setting-icon {
  display: inline;
  float: right;
}
</style>
