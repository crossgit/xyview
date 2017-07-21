<template>
    <div class="xy-address">
        <div class="bgDiv" :class="{'hideBg':addressVisible,'showBg':!addressVisible}" @click="hideNav()"> </div>
        <div class="upNav" :class="{'hideNav':addressVisible,'showNav':!addressVisible}">
            <ul class="top1" :class="{'showTop1':showlift==1,'showTop2':showlift==2,'showTop3':showlift==3}">
                <li @click="openTop2()">aaa</li>
                <li @click="openTop2()">bbb</li>
                <li @click="openTop2()">ccc</li>
            </ul>
            <ul class="top2" v-show="showlift>=2" :class="{'showTop1':showlift==1,'showTop2':showlift==2,'showTop3':showlift==3}">
                <li @click="openTop3()">111</li>
                <li @click="openTop3()">222</li>
            </ul>
            <ul class="top3" v-show="showlift>=3" :class="{'showTop1':showlift==1,'showTop2':showlift==2,'showTop3':showlift==3}">
                <li>a7b7</li>
                <li>c9d9</li>
            </ul>
    
            <div class="clear"></div>
            <div class="footer">
                <!--<button>重置</button>
                            <button>确定</button>-->
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import address from './address.js';
export default {
    name: 'xy-address',
    data() {
        return {
            addressVisible: true,
            showlift: 1,  // 显示层数,默认1
        }
    },
    props: {
        height: [Number],
        visible: [Boolean],
    },
    mounted: function () {
        console.log(this.visible);
    },
    methods: {
        xyTap(item) {
            this.$emit('xy-tap', item);
            this.$parent.currentIndex = this.currentIndex;
        },
        // 显示
        showNav() {
            console.log('显示');
            this.$emit('xy-status', true);
            this.addressVisible = false;
        },
        // 隐藏
        hideNav() {
            console.log('隐藏');
            this.$emit('xy-status', false);
            this.addressVisible = true;
        },
        openTop1() {
            this.showlift = 1;
        },
        openTop2() {
            this.showlift = 2;
        },
        openTop3() {
            this.showlift = 3;
        },
    },
    watch: {
        visible(val) {
            console.log(val);
            if (val) {
                this.showNav();
            }
            else {
                this.hideNav();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';
// 隐藏菜单
.hideNav {
    top: -70% !important;
    transition: top .5s !important;
}

// 隐藏背景
.hideBg {
    display: none !important;
    transition: display 1s !important;
}

.showNav {
    top: 44px !important;
    transition: top 1s !important;
}

.showBg {
    display: block !important;
    transition: opacity .5s !important;
}

// 背景
.bgDiv {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .2;
    position: fixed;
    display: none;
    z-index: 998;
    bottom: 0;
}

// 菜单
.upNav {
    width: 100%;
    height: 70%;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    top: -70%; // top: 44px;
    display: block; // transition: top 1s;
    & {
        ul {
            padding: 0;
            margin: 0;
            float: left; // width: 100%;
            box-shadow: -1px 0 6px #ccc;
        }
        ul.showTop1 {
            width: 100%;
        }
        ul.showTop2 {
            width: 50%;
        }
        ul.showTop3 {

            &.top1 {
                width: 20%;
            }
            ;
            &.top2 {
                width: 60%;
            }
            ;
            &.top3 {
                width: 20%;
            }
        }
        ul.top1 li,
        ul.top2 li,
        ul.top3 li {

            display: inline-block;
            width: 98%;
            height: 44px; // margin-left: 2%;
            line-height: 44px;
            border-bottom: 1px solid #f5f5f5;
            text-align: center;
            &:hover {
                background-color: #eee;
            }
        }


        .clear {
            clear: both;
        }

        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    }
}
</style>
