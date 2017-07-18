import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import preview from '@/components/preview'
import xyheader from '@/components/header'
import swiper from '@/components/pswiper'
import address from '@/components/address'
import timeline from '@/components/timeline'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/preview', name: 'preview', component: preview },
    { path: '/headerbar', name: 'headerbar', component: xyheader },
    { path: '/swiper', name: 'swiper', component: swiper },
    { path: '/address', name: 'address', component: address },
    { path: '/timeline', name: 'timeline', component: timeline }
  ]
})
