<template>
  <a class="xy-btn-tab-item"
     :class="classes"
     href="javascript:"
     :style="style"
     @click="xyTap(currentIndex)">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from '../assets/mixins/multiItems';
import { go } from '../assets/mixins/multiItems';
export default {
  name:'xyButtonTabItem',
  mixins: [childMixin],
  methods: {
    xyTap(item) {
      this.$emit('xy-tap', item);
      this.$parent.currentIndex = this.currentIndex;
    }
  },
  computed: {
    classes() {
      return {
        'xy-btn-group-active': this.currentIndex === this.$parent.currentIndex,
        'xy-btn-tab-item-first': this.currentIndex === 0,
        'xy-btn-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        'xy-btn-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
      }
    },
    style() {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        }
      }
    },
  }
}
</script>

<style lang="scss">

</style>