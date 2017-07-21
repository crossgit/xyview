
<style>
a {
  color: #fff;
}
</style>


<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(item,index) in dataUrl" :key="index">
      <xy-prompt>
        <router-link :to="item.url" class="right" slot="right">{{item.title}}</router-link>
      </xy-prompt>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome ',
      dataUrl: [
        { url: '/preview', title: '图片预览' },
        { url: '/headerbar', title: '按钮组' },
        { url: '/swiper', title: '左右上下滚动' },
        { url: '/address', title: '地址' },
        { url: '/timeline', title: '时间轴' },
        { url: '/upload', title: '图片上传' },
        { url: '/actionsheet', title: '弹出选择' },
        { url: '/picker', title: 'picker' },
        { url: '/popup', title: 'popup' },
        { url: '/scoller', title: '滑动' },
        { url: '/datetime', title: '日期时间' },
      ]
    }
  }
}
</script>

 