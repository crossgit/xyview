<template>
  <div class="xy-flexbox" :class="{'xy-flex-col': orient === 'vertical', 'xy-flex-row': orient === 'horizontal'}" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xyFlexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles () {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      }
      return styles
    }
  }
}
</script>

<style lang="scss">
.xy-flexbox {
  width: 100%;
  text-align: left;
  display: flex;
  display: -webkit-flex;
  box-align: center;
  align-items: center;
}
.xy-flexbox .xy-flexbox-item {
  flex: 1;
  -webkit-flex: 1;
  min-width: 20px;
  width: 0%;
}

.xy-flexbox .xy-flexbox-item:first-child {
  margin-left: 0!important;
  margin-top: 0!important;
}
.xy-flex-col {
  box-orient: vertical;
  flex-direction: column;
}
.xy-flex-col > .xy-flexbox-item {
  width: 100%;
}
.xy-flex-row {
  box-direction: row;
  box-orient: horizontal;
  flex-direction: row;
}
</style>
