<template>
    <div id="headerbar">
        <!--<header class="mui-bar mui-bar-nav">
                                                    <a class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1);"></a>
                                                    <h1 class="mui-title">{{this.$route.name}}</h1>
                                                </header>
                                                <nav class="mui-bar mui-bar-tab">
                                                    <a class="mui-tab-item mui-active" href="#tabbar">
                                                        <span class="mui-icon mui-icon-home"></span>
                                                        <span class="mui-tab-label">首页</span>
                                                    </a>
                                                    <a class="mui-tab-item" href="#tabbar-with-chat">
                                                        <span class="mui-icon mui-icon-email">
                                                            <span class="mui-badge">9</span>
                                                        </span>
                                                        <span class="mui-tab-label">消息</span>
                                                    </a>
                                                    <a class="mui-tab-item" href="#tabbar-with-contact">
                                                        <span class="mui-icon mui-icon-contact"></span>
                                                        <span class="mui-tab-label">通讯录</span>
                                                    </a>
                                                    <a class="mui-tab-item" href="#tabbar-with-map">
                                                        <span class="mui-icon mui-icon-gear"></span>
                                                        <span class="mui-tab-label">设置</span>
                                                    </a>
                                                </nav>-->
        <xy-button-tab :height='tabheight' v-model="demobtn">
            <xy-button-tab-item @xy-tap="event1">我的</xy-button-tab-item>
            <xy-button-tab-item @xy-tap="event1">她的</xy-button-tab-item>
            <!--<xy-button-tab-item @xy-tap="event1">xx的</xy-button-tab-item> -->
        </xy-button-tab>
        <!--style="width: 100%; position: absolute; left: 0px; top: 0px; z-index: 100;"-->
        <xy-header>
            <span slot="title">标题</span>
        </xy-header> 
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-prompt>
            <span class="left-top" slot="left-top">的卢卡斯的积分卡健身房卡萨丁发快递房间卡水电费asdfasdfkdk 堆话</span>
            <span class="left-bottom" slot="left-bottom">2016年15月10日</span>
            <span class="right" slot="right">一个少时诵诗书所所</span>
        </xy-prompt>
        <xy-btn-style :val="val"></xy-btn-style>
    </div>
</template>
<script>
export default {
    data() {
        return {
            val: '+ 新加内容',
            tabheight: 40,
            demobtn: 2
        }
    },
    methods: {
        event1(item) {
            console.log(item);
        },
         event2(item) {
            console.log(item);
        },
    }
}
</script>
<style lang="scss">
.left-top,
.left-bottom {
    display: block;
    /*内联对象需加*/
    width: 15em;
    word-break: keep-all;
    /* 不换行 */
    white-space: nowrap;
    /* 不换行 */
    overflow: hidden;
    /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis;
    /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}

.left-bottom {
    font-size: 12px;
}

.right {
    top: 15px;
}
</style>
