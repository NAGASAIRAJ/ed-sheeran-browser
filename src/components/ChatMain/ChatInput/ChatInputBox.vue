<template>
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
.emoji-activate-button {
  width: 48px;
  float: right;
  display: inline-block;
  width: 40px;
}
.emoji-picker {
  width: 220px;
  position: absolute;
  top: -432px;
  right: 140px;
}
.chat-control-element {
  box-sizing: border-box;
  display: inline-block;
  width: 48px;
  height: 100%;
  border-right: 1px solid black;
  float: left;
}
.chat-input-controls {
  width: 98%;
  margin: auto;
  border: 1px solid black;
  box-sizing: border-box;
  height: 40px;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
}
.chat-input-container {
  background-color: #fafafa;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 80px;
  border-top: 1px solid #dbd9d9;
}
</style>
