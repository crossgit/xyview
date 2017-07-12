<template>
  <header class="mui-bar mui-bar-nav">
    <a class="mui-icon mui-icon-left-nav mui-pull-left" @click="$emit('on-goback')"></a>
    <h1 class="mui-title">
      <slot name='title'></slot>
    </h1>
  </header>
</template>
<script>
export default {
  name: 'xyHeader'
}
</script>
