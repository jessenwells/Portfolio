import Vue from 'vue'
import Router from 'vue-router'
//
import Home from '@/views/Home'
import Branding from '@/views/Branding'
import Web from '@/views/Web'
import Apparel from '@/views/Apparel'
import Playground from '@/views/Playground'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
        {
      path: '/branding',
      component: Branding
    },
        {
      path: '/web',
      component: Web
    },
        {
      path: '/apparel',
      component: Apparel
    },
        {
      path: '/playground',
      component: Playground
    }
  ],
  mode: 'history'
})
