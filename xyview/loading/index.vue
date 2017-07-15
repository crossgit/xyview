<template>
    <p class="xy-progressbar xy-progressbar-in"
       :progress="text">
        <span></span></p>
</template>

<script>
import progressBar from './progressBar'
export default {
    name: 'xy-loading',
    mounted() {
        this.$nextTick(() => {
            // progressbar(this.$el, {
            //     scrollBox: this.scrollBox,
            //     offset: this.offset,
            //     checkStickySupport: typeof this.checkStickySupport === 'undefined' ? true : this.checkStickySupport
            // })
            progressBar(this.$el).setProgress(this.text);
        })
    },
    props: {
        text: [String, Number]
    },
    watch: {
        'text'(val) {
            progressBar(this.$el).setProgress(this.text);
            if (val >= 100) {
                this.text = 0;
                progressBar(this.$el).hide();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.xy-progressbar-in {
    -webkit-animation: xy-progressbar-in 300ms forwards;
    animation: xy-progressbar-in 300ms forwards;
}

.xy-progressbar {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 5px;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    vertical-align: middle;
    border-radius: 2px;
    background: #b6b6b6;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
     span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: 150ms;
        transition: 150ms;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        background: #007aff;
    }
}
</style>