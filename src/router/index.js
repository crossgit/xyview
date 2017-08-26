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
import sticky from '@/sticky'
import sticky_1 from '@/sticky_1'
import sticky_2 from '@/sticky_2'
import sticky_3 from '@/sticky_3'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    return { x: 0, y: 0 }
  },
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
    {
      path: '/sticky', component: sticky, redirect: '/sticky/sticky_1', children: [
        { path: 'sticky_1', name: 'sticky_1', component: sticky_1 },
        { path: 'sticky_2', name: 'sticky_2', component: sticky_2 },
        { path: 'sticky_3', name: 'sticky_3', component: sticky_3 },
      ]
    },
  ]
})
