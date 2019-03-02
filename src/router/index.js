import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/example',
    //   name: 'Example',
    //   component: Example
    // },
    {
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
