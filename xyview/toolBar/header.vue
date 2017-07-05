<style lang="scss" scoped>

</style>
<template>
    <header class="xy-bar xy-bar-nav"
            :style="gap">
        <a class="mui-icon mui-icon-left-nav mui-pull-left"
           @click="$router.go(-1);"></a>
        <h1 class="xy-title"
            v-text="title"></h1>
        <slot></slot>
    </header>
</template>

<script> 
export default {
    name: 'xy-header',
    props: {
        gap: String,
        title: String,
    },
}
</script>

<style lang="scss">

</style>