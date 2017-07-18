<template>
	<div class="xy-timeline">
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'xyTimeline',
  props: {
    color: String,
    isShowIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    setChildProps () {
      if (!this.$children) return
      const len = this.$children.length
      this.$children.forEach((child, index) => {
        child.isLast = index === len - 1
        child.isFirst = index === 0
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/variable.scss';

.xy-timeline {
  padding: 1rem;
}

.xy-timeline > ul > li {
  list-style: none;
}
 

.xy-timeline {
  &-item {
    position:relative;
  }

  .xy-timeline-item-content {
    padding:0 0 1.5rem 1.2rem;
  }

  .xy-timeline-item-head, .xy-timeline-item-head-first {
    position:absolute;
    content:'';
    z-index:99;
    border-radius:99px;
  }

  .xy-timeline-item-head {
    width:10px;
    height:10px;
    left:1px;top:4px;
  }

  .xy-timeline-item-head-first {
    width:20px;
    height:20px;
    left:-4px;top:5px;
  }

  .xy-timeline-item-tail {
    position:absolute;
    content:'';
    height:100%;
    width:2px;
    left:5px;
    top:5px;
    background-color: $timeline-item-bg-color;
  }

  .xy-timeline-item-checked {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;

    .xy-timeline.weui-icon-success-no-circle::before {
      font-size: 14px;
      position: absolute;
      left: 3px;
      top: 3px;
      margin: 0!important;
      color: #FFF;
    }
  }
}

.xy-timeline-item-color {
	background-color: $timeline-item-bg-color;
}
</style>
