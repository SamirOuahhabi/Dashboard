import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('@/components/Dashboard'),
      children: [
        {
          path: '/terminal',
          name: 'terminal',
          component: require('@/components/Terminal')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
