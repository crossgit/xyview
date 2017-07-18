<template>
    <li class="xy-timeline-item">
        <!-- <div :class="['xy-timeline-item-color', {'xy-timeline-item-head': !isFirst,'xy-timeline-item-head-first': isFirst }]" :style="headStyle"> -->
        <div class="xy-timeline-item-color xy-timeline-item-head-first" :style="headStyle">
            <!-- <icon v-show="isFirst && $parent.isShowIcon" type="success_no_circle" class="xy-timeline-item-checked"></icon>   -->
            <!-- <img v-show="isFirst && $parent.isShowIcon" src="../icons/checkmark-round.svg" alt="" class="xy-timeline-item-checked"> -->
        </div>
        <div class="xy-timeline-item-tail" :style="tailStyle"></div>
        <div class="xy-timeline-item-content">
            <slot></slot>
        </div>
    </li>
</template>

<script>
// import Icon from '../../xyview/icons'

export default {
    name: 'xyTimelineItem',
    data() {
        return {
            isLast: true,
            isFirst: false,
            headStyle: { backgroundColor: this.$parent.color }
        }
    },
    mounted() {
        this.$parent.setChildProps()
    },
    beforeDestroy() {
        // this will be null
        const $parent = this.$parent
        this.$nextTick(() => {
            $parent.setChildProps()
        })
    },
    //   components: {
    //     Icon
    //   },
    computed: {
        tailStyle() {
            return this.isLast ? { display: 'none', backgroundColor: this.$parent.color } : { display: 'block', backgroundColor: this.$parent.color }
        }
    }
}
</script>

