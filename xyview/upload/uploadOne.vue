<template>
    <div>
        <input type="file" style="display: none;" id="img-upload" accept="image/*" @change="uploadImg($event)" />
    </div>
</template>
<script>
// base64 必须,rotate 1,scale 2
// exif 识别图片反正,IE10以下不支持 multiple
import EXIF from 'exif-js'
export default {
    name: 'xyImageUploadOne',
    props: {
        imgArr: {
            type: Array,
            twoWay: true,
            default: Array
        },
        bRotate: { // 是否翻转
            type: Boolean,
            default: false
        },
        bScale: { // 是否翻转压缩
            type: Boolean,
            default: false
        },

    },
    methods: {
        uploadImg: function (t) {
            let imgInfo = t.target.files[0];
            let _this = this;

            // let reader = new FileReader();
            // reader.readAsDataURL(imgInfo);
            // reader.onload = function () {
            var oReader = new FileReader();
            oReader.onload = function (e) {
                if (_this.bRotate) {
                    // 旋转,不压缩
                    var Orientation;
                    EXIF.getData(imgInfo, function () {
                        Orientation = EXIF.getTag(imgInfo, 'Orientation');
                    });
                    var image = new Image();
                    image.src = e.target.result;
                    image.onload = function () {
                        var expectWidth = this.naturalWidth;
                        var expectHeight = this.naturalHeight;
                        if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                            expectWidth = 800;
                            expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                        } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                            expectHeight = 1200;
                            expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                        }
                        var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");
                        canvas.width = expectWidth;
                        canvas.height = expectHeight;
                        ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                        var base64 = null;
                        //修复ios上传图片的时候 被旋转的问题
                        if (Orientation != "" && Orientation != 1) {
                            switch (Orientation) {
                                case 6://需要顺时针（向左）90度旋转
                                    _this.rotateImg(this, 'left', canvas);
                                    break;
                                case 8://需要逆时针（向右）90度旋转
                                    _this.rotateImg(this, 'right', canvas);
                                    break;
                                case 3://需要180度旋转
                                    _this.rotateImg(this, 'right', canvas);//转两次
                                    _this.rotateImg(this, 'right', canvas);
                                    break;
                            }
                        }
                        base64 = canvas.toDataURL();
                        _this.imgArr.push({ 'src': base64 });
                    };
                }
                else if (_this.bScale) {
                    // 旋转,压缩
                    var Orientation;
                    EXIF.getData(imgInfo, function () {
                        Orientation = EXIF.getTag(imgInfo, 'Orientation');
                    });
                    var image = new Image();
                    image.src = e.target.result;
                    image.onload = function () {
                        var expectWidth = this.naturalWidth;
                        var expectHeight = this.naturalHeight;
                        if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                            expectWidth = 800;
                            expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                        } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                            expectHeight = 1200;
                            expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                        }
                        var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");
                        canvas.width = expectWidth;
                        canvas.height = expectHeight;
                        ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                        var base64 = null;
                        //修复ios上传图片的时候 被旋转的问题
                        if (Orientation != "" && Orientation != 1) {
                            switch (Orientation) {
                                case 6://需要顺时针（向左）90度旋转
                                    _this.rotateImg(this, 'left', canvas);
                                    break;
                                case 8://需要逆时针（向右）90度旋转
                                    _this.rotateImg(this, 'right', canvas);
                                    break;
                                case 3://需要180度旋转
                                    _this.rotateImg(this, 'right', canvas);//转两次
                                    _this.rotateImg(this, 'right', canvas);
                                    break;
                            }
                        }
                        // 如果图片大于1M,就把图片宽高缩小到1/4
                        base64 = canvas.toDataURL("image/jpeg", 0.8);
                        if (imgInfo.size / 1024000 > 1) {
                            _this.imgScale(base64, 4)
                        } else {
                            _this.imgStr.src = base64;
                        }
                    };
                }
                else {
                    // 不做任何处理
                    _this.imgArr.push({ 'src': e.target.result });
                }
            };

            oReader.readAsDataURL(imgInfo);
        },
        imgScale: function (imgUrl, quality) {
            // 图片压缩
            let img = new Image();
            let _this = this;
            let canvas = document.createElement('canvas');
            let cxt = canvas.getContext('2d');
            img.src = imgUrl;
            img.onload = function () {
                //缩放后图片的宽高
                let width = img.naturalWidth / quality;
                let height = img.naturalHeight / quality;
                canvas.width = width;
                canvas.height = height;
                cxt.drawImage(this, 0, 0, width, height);
                _this.imgArr.push({ 'src': canvas.toDataURL('image/jpeg') });
            }
        },
        rotateImg: function (img, direction, canvas) {
            //图片旋转
            var min_step = 0;
            var max_step = 3;
            if (img == null) return;
            var height = img.height;
            var width = img.width;
            var step = 2;
            if (step == null) {
                step = min_step;
            }
            if (direction == 'right') {
                step++;
                step > max_step && (step = min_step);
            } else {
                step--;
                step < min_step && (step = max_step);
            }
            var degree = step * 90 * Math.PI / 180;
            var ctx = canvas.getContext('2d');
            switch (step) {
                case 0:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0);
                    break;
                case 1:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, 0, -height);
                    break;
                case 2:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, -height);
                    break;
                case 3:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, 0);
                    break;
            }
        }
    }
}
</script>