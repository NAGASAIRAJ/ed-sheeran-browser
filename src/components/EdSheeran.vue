<template>
  <div class="chat-container">
    <LeftChatComponent/>
    <RightChatComponent/>
  </div>
</template>

<script>
import LeftChatComponent from '@/components/ChatControls/Main.vue'
import RightChatComponent from '@/components/ChatMain/Main.vue'
export default {
  name: 'EdSheeran',
  components: {LeftChatComponent, RightChatComponent},
  data () {
    return {
      msg: 'edsheeran'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chat-container{
    overflow-y:hidden;
    height: 100%;
    position: absolute;
    width: 100%;
  }
</style>
