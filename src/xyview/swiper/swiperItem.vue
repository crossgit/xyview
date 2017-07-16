<template>
  <div class="xy-swiper-item"><slot></slot></div>
</template>

<script>
export default {
  name: 'xySwiperItem',
  mounted () {
    this.$nextTick(() => {
      this.$parent.rerender()
    })
  },
  beforeDestroy () {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.rerender()
    })
  }
}
</script>
