<template>
    <div class="xy-sticky-box">
        <slot></slot>
    </div>
</template>

<script>
import sticky from './sticky'

export default {
    name: 'xy-sticky',
    mounted() {
        this.$nextTick(() => {
            sticky(this.$el, {
                scrollBox: this.scrollBox,
                offset: this.offset,
                checkStickySupport: typeof this.checkStickySupport === 'undefined' ? true : this.checkStickySupport
            })
        })
    },
    props: ['scrollBox', 'offset', 'checkStickySupport']
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';

.xy-sticky-box {
    z-index: $sticky-zindex;
}

.xy-sticky {
    width: 100%;
    position: sticky;
    top: 0;
}

.xy-content .xy-sticky {
    top: $header-height;
}

// ----
// .xy-fixed {
//     width: 100%;
//     position: fixed;
//     top: 0;
// }
// .xy-content .xy-fixed {
//     top: $header-height;
// }
</style>
