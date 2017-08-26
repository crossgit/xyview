<template>
    <div id="sticky_1">
        <h1>sticky_1</h1>
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
        for (let i = 1; i < 100; i++) {
            this.items.push(i)
        }
    }
}
</script>
