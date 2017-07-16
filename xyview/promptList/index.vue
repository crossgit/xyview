<template>
    <div class="xy-header">
        <div class="xy-header-left">
            <slot name="left-top"></slot>
            <slot name="left-bottom"></slot>
        </div>
        <div class="xy-header-right">
            <slot name="right"></slot>
        </div>
        <!--<button><slot name='first'></slot>为了明确作用范围，<slot name='second'></slot>所以使用button标签</button>-->
    </div>
</template>
 
<script>
// import objectAssign from 'object-assign'

export default {
    name: 'xyPrompt'
}
</script>

<style lang="scss">
@import '../assets/styles/variable';

.xy-header {
    position: relative;
    padding: 3px 0;
    box-sizing: border-box;
    background-color: $header-background-color;
    height: 54px;
    box-shadow: 2px 2px 2px #555;
    margin-bottom: 10px;
}

.xy-header .xy-header-title,
.xy-header h1 {
    margin: 0 88px;
    line-height: 40px;
    text-align: center;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: $header-title-color;
}

.xy-header .xy-header-title>span {
    display: inline-block;
}

.xy-header .xy-header-left,
.xy-header .xy-header-right {
    position: absolute;
    display: block;
    font-size: 14px;
    line-height: 21px;
    color: $header-text-color;
}



.xy-header .xy-header-left {
    left: 1em;
    width: 50%;
    text-align: left;
    top: 5px;
}

.xy-header .xy-header-left .xy-header-back {
    padding-left: 16px
}

.xy-header .xy-header-left .left-arrow {
    position: absolute;
    width: 30px;
    height: 30px;
    top: -5px;
    left: -5px;

    &:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid $header-arrow-color;
        border-width: 1px 0 0 1px;
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    }
}

.xy-header .xy-header-right {
    right: .5em;
    width: 40%;
    text-align: right;
    top: 15px;
}
</style>
