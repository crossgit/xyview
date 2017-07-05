<style lang="scss" scoped>
.common-footer {
    font-size: 12px;
    line-height: 1.1;
}

.common-footer span {
    background-color: #f7f7f7;
}

.common-footer .mui-badge {
    position: relative;
    padding: .1px;
    line-height: 10px;
    background-color: #f00;
    left: 15px;
    top: -5px;
}
</style>
<template>
    <nav class="mui-bar mui-bar-tab common-footer">
         <slot></slot>
    </nav>
</template>

<script>
 
export default {
    name: 'xy-footer',
    data() {
       
    },
    mounted: function () {
        
    },
    methods: {
         
    },
   
}
</script>