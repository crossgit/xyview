<template>
    <div id="address">
        <xy-address :visible="addressVis" @xy-status="addressAtatus">
            <!-- <xy-bottom-tab :height='tabheight' v-model="demobtn" style="margin: 10px;">
                <xy-buttom-tab-item>重置</xy-buttom-tab-item>
                <xy-buttom-tab-item>确定1</xy-buttom-tab-item>
            </xy-bottom-tab> -->
        </xy-address>
    </div>
</template>
<script>
export default {
    data() {
        return {
            height: 60,
            addressVis: true,
            tabheight: 32,
            demobtn: 1,
        }
    },
    methods: {
        addressAtatus(status) {
            this.addressVis = status;
        },
    }
}
</script>
