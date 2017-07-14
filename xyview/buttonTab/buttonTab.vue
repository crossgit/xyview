<template>
    <div class="xy-btn-group">
        <slot></slot>
    </div>
</template>

<script>
import { parentMixin } from '../assets/mixins/multiItems'

export default {
    name:'xyButtonTab',
    mixins: [parentMixin],
    props: {
        height: Number
    }
}
</script> 
 <style lang="scss" scoped>
.xy-btn-group {
    -webkit-touch-callout: none;
    display: box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    &>a {
        display: block;
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        width: 100%;
        height: 30px;
        padding: 0;
        font-size: 14px;
        line-height: 31px;
        text-align: center;
        color: #999;
        white-space: nowrap;
        background: #fdfdfd;
        -webkit-tap-highlight-color: rgba(255,0,0,0);
        &:after {
            background-clip: padding-box;
            box-sizing: border-box;
        }
        &.xy-btn-group-active {
            color: #fff;
            background: #1ab99a;//#ffe26d;
        }
        // &.xy-btn-tab-item-first {
        //     border-top-left-radius: 32px;
        //     border-bottom-left-radius: 32px;
        // } 
        // &.xy-btn-tab-item-last {
        //     border-top-right-radius: 32px;
        //     border-bottom-right-radius: 32px;
        // }
        &.xy-btn-tab-item-middle:after {
            border-right: 1px solid #ccc;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            border-left: none;
        }
        &.xy-btn-tab-item-first:after,
        &.xy-btn-tab-item-middle:after {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 200%;
            height: 1px;
            color: #ccc;
            height: 200%;
            -webkit-transform-origin: left top;
            transform-origin: left top;
            -webkit-transform: scale(.5);
            transform: scale(.5);
        }
        &.xy-btn-tab-item-first:after {
            border: 1px solid #ccc;
            // border-top-left-radius: 32px;
            // border-bottom-left-radius: 32px;
        }
        &.xy-btn-tab-item-middle:after {
            border-right: 1px solid #ccc;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            border-left: none;
        }
        &.xy-btn-tab-item-last:after {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 200%;
            height: 1px;
            border-right: 1px solid #ccc;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            border-left: none;
            color: #ccc;
            height: 200%;
            -webkit-transform-origin: left top;
            transform-origin: left top;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            // border-top-right-radius: 32px;
            // border-bottom-right-radius: 32px;
        }
    }
}
</style>