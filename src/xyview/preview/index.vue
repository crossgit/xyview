<style scoped>
@import '~photoswipe/dist/photoswipe.css';
@import '~photoswipe/dist/default-skin/default-skin.css';
</style>
<template>
    <!-- Root element of PhotoSwipe. Must have class pswp. vux-previewer-->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true" style="z-index:1500">
    
        <!-- Background of PhotoSwipe. 
                     It's a separate element as animating opacity is faster than rgba(). -->
        <div class="pswp__bg"></div>
    
        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">
    
            <!-- Container that holds slides. 
                        PhotoSwipe keeps only 3 of them in the DOM to save memory.
                        Don't modify these 3 pswp__item elements, data is added later on. -->
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
    
            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">
    
                <div class="pswp__top-bar">
    
                    <!--  Controls are self-explanatory. Order can be changed. -->
    
                    <div class="pswp__counter"></div>
    
                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
    
                    <button class="pswp__button pswp__button--share" title="Share"></button>
    
                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
    
                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
    
                    <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>
    
                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                </button>
    
                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                </button>
    
                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import UI from 'photoswipe/dist/photoswipe-ui-default'

export default {
    name: 'xyPreview',
    methods: {
        init(index, dom, list) {
            let self = this;
            let options = Object.assign({
                history: false,
                shareEl: false,
                tapToClose: true,
                fullscreenEl: false,
                index: index,
                errorMsg:'<div class="pswp__error-msg"> 图片加载失败.</div>',
                getThumbBoundsFn(index) {
                    // find thumbnail element
                    // let thumbnail = document.querySelectorAll('.previewer-demo-img')[index];  
                    let thumbnail = dom[index];
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    // w = width
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }, this.options);
            list.forEach(function (item) {
                let img = new Image();
                img.src = item.src;
                item.w = img.width;
                item.h = img.height;
            })
            this.photoswipe = new PhotoSwipe(this.$el, UI, list, options)
            this.photoswipe.init()
            this.photoswipe.listen('close', () => {
                this.$emit('on-close')
            })
        },
        show(index, dom, list) {
            this.init(index, dom, list)
        },
        close() {
            this.photoswipe.close()
        }
    },
    props: { 
        index: {
            type: Number,
            default: 0
        },
        options: {
            type: Object,
            default() {
                return {}
            }
        },
    }
}
</script>

