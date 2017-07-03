 <style>

</style>
<template>
    <div id="demo">
        <xy-preview ref="previewer" class="mui-fullscreen"></xy-preview>
        <!--<xy-header :title="this.$route.name" > </xy-header>-->
       
 
        <!--<button @click="show()">显示图片</button>-->
        <img class="previewer-demo-img" v-for="(item, index) in imgs" :src="item.src" width="100" @click="show(index)">
    
     
    
        <!--测试-->
        <div id="__mui-imageview__" class="mui-slider mui-fullscreen" style="display:none; z-index:2000;background-color: #000;" data-slider="21">
            <div id="__mui-imageview__group" class="mui-slider-group" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);">
                <div class="mui-slider-item">
                    <a>
                        <img src="https://placekitten.com/800/400">
                    </a>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>  
import _ from 'lodash'; 
export default {
    data() {
        return {
            file64: null,
            items: [],
            tabheight: 32,
            demobtn: 2,
            num: 10, // 1-100
            addressVis: false,
            //----
            imgs: [
                {
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494484569&di=ca0f556611089513191251ceab4c3217&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.xiaomayi88.com%2Fuploads%2Fimg%2F140411%2F97-14041113555Q96.jpg',
                    // w:750,
                    // h:200,
                    title: '百度图片'
                },
                {
                    src: 'https://placekitten.com/800/400',
                    // w: 750,
                    // h: 50,
                    title: '这里写一段话'
                },
                {
                    src: 'https://placekitten.com/1200/900',
                    // w: 750,
                    // h: 900
                }],
            list: null,
        }
    },
    
    methods: { 
        show(index) {
            let list = [
                {
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494484569&di=ca0f556611089513191251ceab4c3217&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.xiaomayi88.com%2Fuploads%2Fimg%2F140411%2F97-14041113555Q96.jpg',
                    title: '百度图片'
                },
                {
                    src: 'https://placekitten.com/800/400',
                    title: '这里写一段话'
                },
                {
                    src: 'https://placekitten.com/1200/900',
                }];
            this.$refs.previewer.show(index, document.querySelectorAll('.previewer-demo-img'), list);

        }  
    } 
}
</script>