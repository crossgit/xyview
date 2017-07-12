<template>
    <input type="button" class="btn-style xy-btn" :value="val">
</template>        

<style lang="scss">
.btn-style {
    background-color: #489;
     position: relative;
    padding: 3px 0;
    box-sizing: border-box; 
    height: 44px;
    width: 100%;
    box-shadow: 2px 2px 2px #555
}
.xy-btn{
    position: relative;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: #333;
    text-align: center;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
}
</style>

<script>
export default {
    name: 'xy-btn-style',
    props:["val"]
}
</script>
