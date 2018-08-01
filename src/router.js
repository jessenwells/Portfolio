import Vue from 'vue'
import Router from 'vue-router'
//
import Home from '@/views/Home'
import Branding from '@/views/Branding'
import Web from '@/views/Web'
import Apparel from '@/views/Apparel'
import Playground from '@/views/Playground'

import Branding01 from '@/views/Branding/musicmilitia'
import Branding02 from '@/views/Branding/kigilove'
import Branding03 from '@/views/Branding/slekhair'
import Branding04 from '@/views/Branding/learn&explore'
import Branding05 from '@/views/Branding/zedgirl'
import Branding06 from '@/views/Branding/rnr'

import Web01 from '@/views/Web/slek'
import Web02 from '@/views/Web/inteldashboard'
import Web03 from '@/views/Web/kisstofly'
import Web04 from '@/views/Web/itsapostcard'
import Web05 from '@/views/Web/kigilife'
import Web06 from '@/views/Web/energydashboard'
import Web07 from '@/views/Web/adwap'
import Web08 from '@/views/Web/veteranlite'

import Apparel01 from '@/views/Apparel/nycskyline'
import Apparel02 from '@/views/Apparel/crown'
import Apparel03 from '@/views/Apparel/nycmap'
import Apparel04 from '@/views/Apparel/pyramid'
import Apparel05 from '@/views/Apparel/moody'
import Apparel06 from '@/views/Apparel/nycliberty'

import Playground01 from '@/views/Playground/svgmelt'
import Playground02 from '@/views/Playground/3dparallax'
import Playground03 from '@/views/Playground/svgdrawpath'
import Playground04 from '@/views/Playground/svgmorph'
import Playground05 from '@/views/Playground/cssdrawpath'
import Playground06 from '@/views/Playground/sasscolor'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
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
      path: '/branding/musicmilitia',
      component: Branding01
    },
    {
      path: '/branding/kigilove',
      component: Branding02
    },
    {
      path: '/branding/slekhair',
      component: Branding03
    },
    {
      path: '/branding/learn&explore',
      component: Branding04
    },
    {
      path: '/branding/zedgirl',
      component: Branding05
    },
    {
      path: '/branding/rnr',
      component: Branding06
    },
    {
      path: '/web',
      component: Web
    },
    {
      path: '/web/slek',
      component: Web01
    },
    {
      path: '/web/inteldashboard',
      component: Web02
    },
    {
      path: '/web/kisstofly',
      component: Web03
    },
    {
      path: '/web/itsapostcard',
      component: Web04
    },
    {
      path: '/web/kigilife',
      component: Web05
    },
    {
      path: '/web/energydashboard',
      component: Web06
    },
    {
      path: '/web/adwap',
      component: Web07
    },
    {
      path: '/web/veteranlite',
      component: Web08
    },
    {
      path: '/apparel',
      component: Apparel
    },
    {
      path: '/apparel/nycskyline',
      component: Apparel01
    },
    {
      path: '/apparel/crown',
      component: Apparel02
    },
    {
      path: '/apparel/nycmap',
      component: Apparel03
    },
    {
      path: '/apparel/pyramid',
      component: Apparel04
    },
    {
      path: '/apparel/moody',
      component: Apparel05
    },
    {
      path: '/apparel/nycliberty',
      component: Apparel06
    },
    {
      path: '/playground',
      component: Playground
    },
    {
      path: '/playground/svgmelt',
      component: Playground01
    },
    {
      path: '/playground/3dparallax',
      component: Playground02
    },
    {
      path: '/playground/svgdrawpath',
      component: Playground03
    },
    {
      path: '/playground/svgmorph',
      component: Playground04
    },
    {
      path: '/playground/cssdrawpath',
      component: Playground05
    },
    {
      path: '/playground/sasscolor',
      component: Playground06
    },
    { path: '/portfolio',
      component: Home,
      alias: '/portfolio'
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact"
})
