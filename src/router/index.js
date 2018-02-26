import Vue from 'vue'
import Router from 'vue-router'
import EdSheeran from '@/components/EdSheeran'

Vue.use(Router)

import 'vue-emoji-mart/css/emoji-mart.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EdSheeran',
      component: EdSheeran
    }
  ]
})
