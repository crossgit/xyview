<template> 
    <span v-text="text"
          :class="['xy-badge', {'xy-badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"></span>
</template>

<script>
export default {
    name: 'xy-badge',
    props: {
        text: [String, Number]
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';

.xy-badge {
    display: inline-block;
    text-align: center;
    background: $badge-bg-color;
    color: #fff;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    border-radius: 8px;
    padding: 0 6px;
    background-clip: padding-box;
    vertical-align: middle;
}

.xy-badge-single {
    padding: 0;
    width: 16px;
}
</style>

