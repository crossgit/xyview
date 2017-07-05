<template>
    <div class="xy-tab-item"
         :class="[currentSelected ? activeClass : '', {'xy-tab-selected': currentSelected, 'xy-tab-disabled': disabled}]"
         :style="style"
         @click="xyTap(currentIndex)">
        <slot></slot>
    </div>
</template>

<script>
import { childMixin } from '../assets/mixins/multiItems'

export default {
    name: 'xy-tab-item',
    mixins: [childMixin],
    props: {
        activeClass: String,
        disabled: Boolean
    },
    methods: {
        xyTap(item) {
            this.$emit('xy-tap', item);
            this.$parent.currentIndex = this.currentIndex;
        }
    },
    computed: {
        style() {
            return {
                borderWidth: this.$parent.lineWidth + 'px',
                borderColor: this.$parent.activeColor,
                color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
                border: this.$parent.animate ? 'none' : 'auto'
            }
        }
    }
}
</script>
