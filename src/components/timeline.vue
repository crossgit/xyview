<template>
    <div class="timeline-demo">
        <xy-timeline>
            <xy-timeline-item>
                <h4 class="recent">封面</h4>
    
                <p class="recent">2016-04-17 12:00:00</p>
                <p class="recent">2016-04-17 12:00:00</p>
                <p class="recent">2016-04-17 12:00:00</p>
                <p class="recent">2016-04-17 12:00:00</p>
                <p class="recent">2016-04-17 12:00:00</p>
                <p class="recent">2016-04-17 12:00:00</p>
                <p class="recent">2016-04-17 12:00:00</p>
                <p class="recent">2016-04-17 12:00:00</p>
    
            </xy-timeline-item>
            <xy-timeline-item>
                <h4> 章节</h4>
    
                <p class="recent">2016-04-17 12:00:00</p>
    
            </xy-timeline-item>
        </xy-timeline>
    <xy-divider>-</xy-divider>
        <xy-timeline>
            <xy-timeline-item v-for="(i, index) in count" :key="index">
                <h4 :class="[i === 0 ? 'recent' : '']">Timeline Node {{i + 1}}</h4>
                <p :class="[i === 0 ? 'recent' : '']">index {{i + 1}}</p>
            </xy-timeline-item>
        </xy-timeline> 
    </div>
</template>

<script>

export default {

    data() {
        return {
            count: 3
        }
    }
}
</script>

<style lang="scss">
.timeline-demo {
    p {
        color: #888;
        font-size: 0.8rem;
    }
    h4 {
        color: #666;
        font-weight: normal;
    }
    .recent {
        color: rgb(4, 190, 2)
    }
}
</style>
