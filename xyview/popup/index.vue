<template>
  <transition :name="`xy-popup-animate-${position}`">
    <div v-show="show && !initialShow" :style="styles" class="xy-popup-dialog" :class="[`xy-popup-${position}`, show ? 'xy-popup-show' : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from './popup'

export default {
  name: 'xyPopup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object
  },
  mounted () {
    this.$overflowScrollingList = document.querySelectorAll('.xy-fix-safari-overflow-scrolling')
    this.$nextTick(() => {
      const _this = this
      this.popup = new Popup({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen () {
          _this.fixSafariOverflowScrolling('auto')
          _this.show = true
        },
        onClose () {
          _this.show = false
          if (window.__$xyPopups && Object.keys(window.__$xyPopups).length > 1) return
          if (document.querySelector('.xy-popup-dialog.xy-popup-mask-disabled')) return
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch')
          }, 300)
        }
      })
      if (this.value) {
        this.popup.show()
      }
      this.initialShow = false
    })
  },
  methods: {
    /**
    * https://github.com/airyland/xy/issues/311
    * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
    */
    fixSafariOverflowScrolling (type) {
      if (!this.$overflowScrollingList.length) return
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
      }
    }
  },
  data () {
    return {
      initialShow: true,
      hasFirstShow: false,
      show: this.value
    }
  },
  computed: {
    styles () {
      const styles = {}
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height
      } else {
        styles.width = this.width
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight
      }

      this.isTransparent && (styles['background'] = 'transparent')
      if (this.popupStyle) {
        for (let i in this.popupStyle) {
          styles[i] = this.popupStyle[i]
        }
      }
      return styles
    }
  },
  watch: {
    value (val) {
      this.show = val
    },
    show (val) {
      this.$emit('input', val)
      if (val) {
        this.popup && this.popup.show()
        this.$emit('on-show')
        this.fixSafariOverflowScrolling('auto')
        if (!this.hasFirstShow) {
          this.$emit('on-first-show')
          this.hasFirstShow = true
        }
      } else {
        this.$emit('on-hide')
        this.show = false
        this.popup.hide(false)
        setTimeout(() => {
          if (!document.querySelector('.xy-popup-dialog.xy-popup-show')) {
            this.fixSafariOverflowScrolling('touch')
          }
        }, 200)
      }
    }
  },
  beforeDestroy () {
    this.popup.destroy()
    this.fixSafariOverflowScrolling('touch')
  }
}
</script>

<style lang="scss">
@import '../assets/styles/variable.scss';

.xy-popup-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $popup-background-color;
  z-index: 501;
  transition-property: transform;
  transition-duration: 300ms;
  max-height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.xy-popup-dialog.xy-popup-left {
  width: auto;
  height: 100%;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
}
.xy-popup-dialog.xy-popup-right {
  width: auto;
  height: 100%;
  top: 0;
  right: 0;
  bottom: auto;
  left: auto;
}
.xy-popup-dialog.xy-popup-top {
  width: 100%;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
}
.xy-popup-mask {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  tap-highlight-color: rgba(0,0,0,0);
  z-index: -1;
  transition: opacity 400ms;
}
.xy-popup-mask.xy-popup-show {
  opacity: 1;
}

.xy-popup-animate-bottom-enter, .xy-popup-animate-bottom-leave-active {
  transform: translate3d(0, 100%, 0);
}

.xy-popup-animate-left-enter, .xy-popup-animate-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}

.xy-popup-animate-right-enter, .xy-popup-animate-right-leave-active {
  transform: translate3d(100%, 0, 0);
}

.xy-popup-animate-top-enter, .xy-popup-animate-top-leave-active {
  transform: translate3d(0, -100%, 0);
}
</style>
