import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/Hello'
import preview from '@/preview'
import xyheader from '@/header'
import swiper from '@/pswiper'
import address from '@/address'
import timeline from '@/timeline'
import upload from '@/upload'
import actionsheet from '@/actionsheet'
import picker from '@/picker'
import popup from '@/popup'
import scoller from '@/scoller'
import datetime from '@/datetime' 
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/preview', name: 'preview', component: preview },
    { path: '/headerbar', name: 'headerbar', component: xyheader },
    { path: '/swiper', name: 'swiper', component: swiper },
    { path: '/address', name: 'address', component: address },
    { path: '/timeline', name: 'timeline', component: timeline },
    { path: '/upload', name: 'upload', component: upload },
    { path: '/actionsheet', name: 'actionsheet', component: actionsheet },
    { path: '/picker', name: 'picker', component: picker },
    { path: '/popup', name: 'popup', component: popup },
    { path: '/scoller', name: 'scoller', component: scoller },
    { path: '/datetime', name: 'datetime', component: datetime }, 
  ]
})
