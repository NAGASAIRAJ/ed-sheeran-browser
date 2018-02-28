<template>
  <div class="chat-thread-content">
    <div v-for="x in messages" class="chat-thread-unit">
      <div class="user-profile-picture" style="background-image:url(http://dp.topcovers4fb.com/wp-content/uploads/2015/08/Forever-In-Love-Display-Picture.jpeg)">

      </div>
      <!-- {{x}} -->
      <div class="user-chat-content">
        <div class="user-thread-unit-user">{{x.fromUser.displayName}}</div>
        <div class="user-thread-unit-post-time">{{parsePrettyDateString(x.sent)}}</div>
        <div class="user-thread-post-content">
        <VueMarkdown>
{{x.html}}
        </VueMarkdown>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {VueMarkdown},
  props: ['messages'],
  methods: {
    parsePrettyDateString (dateString) {
      let dateObj = new Date(dateString)
      let month = dateObj.getMonth()
      let date = dateObj.getDate()
      let year = dateObj.getFullYear()
      return date + '-' + month + '-' + year
    }
  }
}
</script>
