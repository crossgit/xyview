<template>
    <div>
        <div class="album-img-list">
            <ul>
                <li v-for="(img ,index) in imgList" :key="index">
                    <div class="album-bg-img">
                        <img :src='img.src'> </div>
                </li>
    
            </ul>
        </div>
        <div class="album">
            <label for="img-upload">选择照片</label>
            <xy-image-upload :img-arr.sync="imgList" :b-scale="scale"></xy-image-upload>
            <input type="button" value="上传" @click="uploadimg">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [
                { src: require('../assets/logo.png') }
            ],
            scale:false
        }
    },
    methods: {
        uploadimg: function () {
            console.log(JSON.stringify(this.imgList)); 
        }
    }
}
</script>
