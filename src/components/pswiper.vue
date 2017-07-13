<template>
    <div id="swiper">
        <xy-swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></xy-swiper>
        <br>
        <xy-swiper :list="demo02_list" style="width:85%;margin:0 auto;" :aspect-ratio="300/800" dots-position="center"></xy-swiper>
        <br>
        <xy-swiper :aspect-ratio="300/800">
            <xy-swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
                <img :src="item">
            </xy-swiper-item>
        </xy-swiper>
        <br>
        <!-- <xy-swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
            <xy-swiper-item>
                <p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
            </xy-swiper-item>
            <xy-swiper-item>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
            </xy-swiper-item>
            <xy-swiper-item>
                <p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
            </xy-swiper-item>
            <xy-<swiper-item>
                <p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </xy-swiper-item>
            <xy-swiper-item>
                <p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </xy-swiper-item>
            <xy-swiper-item>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
            </xy-swiper-item>
        </xy-swiper> -->
    </div>
</template>
<script>

const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
}, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
}, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
}]

const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    title: `(可点击)${item.title}`
}))

const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
}))

const only2ClickList = baseList.slice(0, 2).map(item => {
    item.url = 'http://m.baidu.com'
    return item
})

export default {

    ready() {

    },
    methods: {
        onSwiperItemIndexChange(index) {
            console.log('demo item change', index)
        },
        demo01_onIndexChange(index) {
            this.demo01_index = index
        },
        demo05_onIndexChange(index) {
            this.demo05_index = index
        },
        demo05_onLoad(id) {
            this.demo05_list = id === 1 ? baseList : demoList
        },
        demo06_onIndexChange(index) {
            this.demo06_index = index
        },
        demo07_onIndexChange(index) {
            this.demo07_index = index
        }
    },
    data() {
        return {
            demo01_list: baseList,
            demo02_list: demoList,
            demo03_list: demoList,
            demo04_list: imgList,
            demo05_list: [],
            demo06_list: urlList,
            demo07_list: only2ClickList,
            demo01_index: 0,
            demo02_index: 1,
            demo05_index: 0,
            demo06_index: 0,
            demo07_index: 0,
            swiperItemIndex: 1
        }
    }
}
</script>
