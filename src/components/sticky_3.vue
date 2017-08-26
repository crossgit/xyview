<template>
    <div id="sticky_3">
        <h1>sticky_3</h1>
        <ul>
            <li v-for="i in items" :key=i> {{i}}</li>
        </ul>
    </div>
</template>

<script>
export default {
 data() {
        return {
            items: []
        }
    },
    mounted() {
        for (let i = 200; i < 300; i++) {
            this.items.push(i)
        }
    }
}
</script>
