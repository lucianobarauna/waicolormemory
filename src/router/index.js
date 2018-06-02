import Vue from 'vue'
import Router from 'vue-router'
import Memory from '@/components/Memory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Memory',
      component: Memory
    }
  ]
})
