<template>
    <input type="button" class="btn-style" :value="val">
</template>        

<style lang="scss">
.btn-style {
    background-color: #489;
}
</style>

<script>
export default {
    name: 'xy-btn-style',
    props:["val"]
}
</script>
