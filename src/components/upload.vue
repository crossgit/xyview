<template>
    <div>
        <div class="album-img-list">
            <ul>
                <li v-for="(img ,index) in imgStr" :key="index">
                    <div class="album-bg-img">
                        <img :src="img.src"> </div>
                </li> 
            </ul>
        </div>
        <div class="album">
            <label for="img-upload">选择照片</label>
            <xy-image-upload :img-arr.sync="imgStr" :b-rotate="scale"></xy-image-upload>
            <input type="button" value="上传" @click="uploadimg2">
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
            imgStr: [],
            scale: true, 
        }
    },
    methods: {
        uploadimg: function () {
            console.log(JSON.stringify(this.imgList));
            console.log(this.imgList);
        },
        uploadimg2: function () {
            console.log(JSON.stringify(this.imgStr));
            console.log(this.imgStr);
        }
    }
}
</script>
