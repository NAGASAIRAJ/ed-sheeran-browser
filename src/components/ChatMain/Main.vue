<template>
   <div class=" right-chat-container">
      <ChatRoom/>
      <ChatInputBox/>
    </div>
</template>

<script>

import ChatRoom from '@/components/ChatMain/ChatWindow/ChatRoom.vue'
import ChatInputBox from '@/components/ChatMain/ChatInput/ChatInputBox.vue'
export default {
  components: { ChatRoom, ChatInputBox }

}
</script>

<style>
.right-chat-container {
  overflow: hidden;
  position: absolute;
  left: 250px;
  top: 0px;
  min-width: 500px;
  width: calc(100% - 250px);
  height: 100%;
  background: white;
}

.user-thread-unit-post-time {
  font-size: 0.8em;
  display: inline;
  color: grey;
  padding-left: 6px;
}
.chat-thread-unit {
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 10px;
}

/*
 *  STYLE 6
 */

.chat-thread-content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.chat-thread-content::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.chat-thread-content::-webkit-scrollbar-thumb {
  background-color: #f90;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
</style>
