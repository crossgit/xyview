<template>
    <div id="sticky">
        <xy-sticky>
            <xy-scroller lock-y :scrollbar-x=false>
                <div class="box1"> 
                    <span class="box1-item" v-for="i in 3" :key=i @click="btnChoose(i)">
                        {{' ' + i + ' '}}
                    </span>
                </div>
            </xy-scroller>
        </xy-sticky>
        <div>
            <router-view></router-view>
        </div>
        <!-- <div class="hh">
                    <ul>
                        <li v-for="i in 100" :key=i>
                            {{i}}
                        </li>
                    </ul>
                </div> -->
    </div>
</template>
 

<script>
export default {

    methods: {
        btnChoose(index) {
            switch (index) {
                case 1:
                    this.$router.push('sticky_1');
                    break;
                case 2:
                    this.$router.push('sticky_2');
                    break;
                case 3:
                    this.$router.push('sticky_3');
                    break;

                default:
                    this.$router.push('sticky_1');
                    break
            }
        }
    }
}
</script>

<style scoped>
.box1 {
    height: 50px;
    position: relative;
    width: 1490px;
}

.box1-item {
    width: 200px;
    height: 50px;
    background-color: #ccc;
    display: inline-block;
    margin-left: 15px;
    float: left;
    text-align: center;
    line-height: 50px;
}

.box1-item:first-child {
    margin-left: 0;
}
</style>
