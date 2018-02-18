/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Lander from '@/components/Lander'
// eslint-disable-next-line
Vue.use(Router)
// eslint-disable-next-line
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/fbcampaign',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lander',
      name: 'Lander',
      component: Lander
    }
  ]
})
