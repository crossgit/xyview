<template>
  <div id="popup">
    <div>
      <button title="Default popup" @click="btnshow">Default popup</button>
      <button title="Full popup" @click="btnshow1">Full popup</button>
      <button title="with a Scroller" @click="btnshow2">with a Scroller</button>
      <button title="Multi popup (first)" @click="btnshow3">Multi popup</button>
      <button title="Mask disable" @click="btnshow5">Mask disable</button>
      <button title="Popup address" @click="btnshow6">Popup address</button>
      <button title="default max-height=100%" @click="btnshow12">default max-height 100%</button>
      <button title="set max-height=50%" @click="btnshow13">set max-height=50%</button>
    </div>
  
  <!--基本情况 Default popup -->
    <div v-transfer-dom>
      <xy-popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <div>
            <button title="Another XSwitcher" @click="btnshow"></button>
            <!-- <button title="Show Toast" @click="btnshowToast"></button> -->
          </div>
        </div>
      </xy-popup>
    </div>
  
    <!-- <toast @click="btnshowToast">You did it!</toast> -->
  <!--全屏的 Full popup -->
    <div v-transfer-dom>
      <xy-popup v-model="show1" height="100%">
        <div class="popup1">
          <div>
            <button title="Another XSwitcher" @click="btnshow1">关闭</button>
          </div>
        </div>
      </xy-popup>
    </div>
  <!--可以滚动的  -->
     <div v-transfer-dom>
      <xy-popup v-model="show2" height="200px" @on-first-show="resetScroller">
        <xy-scroller height="200px" lock-x style="border:1px solid red;" ref="scroller">
          <div>
            <p v-for="i of 10" :key="i">{{i}}</p>
          </div>
        </xy-scroller>
      </xy-popup>
    </div> 
  

    <div v-transfer-dom>
      <xy-popup v-model="show3">
        <div class="popup2">
          <div>
            <button title="Multi Popup (first)" @click="btnshow3">取消</button>
            <button title="Multi Popup (second)" @click="btnshow4">确认</button>
          </div>
          this is the first popup
        </div>
      </xy-popup>
    </div>
  
    <div v-transfer-dom>
      <xy-popup v-model="show4">
        <div class="popup2">
          <div>
            <button title="Multi Popup (second)" @click="btnshow4"></button>
          </div>
          this is the second popup
        </div>
      </xy-popup>
    </div>
  
    <div v-transfer-dom>
      <xy-popup v-model="show5" :hide-on-blur=false>
        <div class="popup2">
          <div>
            <button title="Mask disable" @click="btnshow5"></button>
          </div>
          The mask cannot be clicked!
        </div>
      </xy-popup>
    </div>
  
    <!-- <div v-transfer-dom>
      <xy-popup v-model="show6">
        <div class="popup1">
          <div>
            <button title="Popup address" @click="btnshow6"></button>
          </div>
          <div>
            <x-address :title="title6" v-model="value6" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder" :popup-style="{zIndex: 502}"></x-address>
          </div>
        </div>
      </xy-popup>
    </div> -->
  
    <div>
      <button title="transparent background" @click="btnshow7"></button>
    </div>
  
    <!-- <div v-transfer-dom>
      <xy-popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <div>
            <cell title="Product" value="Donate"></cell>
            <cell title="Total" value="$10.24"></cell>
          </div>
          <div style="padding:20px 15px;">
            <x-button type="primary">Pay</x-button>
            <x-button @click.native="show7 = false">Cancel</x-button>
          </div>
        </div>
      </xy-popup>
    </div> -->
  
    <div title="set position">
      <button title="left(100% width)" @click="btnshow8"></button>
      <button title="right" @click="btnshow9"></button>
      <button title="top(no mask)" @click="btnshow10"></button>
      <button title="bottom" @click="btnshow11"></button>
    </div>
  
    <div v-transfer-dom>
      <xy-popup v-model="show8" position="left" width="100%">
        <div class="position-horizontal-demo">
          <span class="xy-close" @click="show8 = false"></span>
        </div>
      </xy-popup>
    </div>
  
    <div v-transfer-dom>
      <xy-popup v-model="show9" position="right">
        <div style="width:200px;">
        </div>
      </xy-popup>
    </div>
  
    <div v-transfer-dom>
      <xy-popup v-model="show10" position="top" :show-mask="false">
        <div class="position-vertical-demo">
          I'm on top. Hide in 1s.
        </div>
      </xy-popup>
    </div>
  
    <div v-transfer-dom>
      <xy-popup v-model="show11" position="bottom">
        <div class="position-vertical-demo">
          I'm on bottom.
        </div>
      </xy-popup>
    </div>
  
    <!-- <div v-transfer-dom>
      <xy-popup v-model="show12" position="bottom">
        <div>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </div>
        <div style="padding: 15px;">
          <x-button @click.native="show12 = false" plain type="primary"> Close Me </x-button>
        </div>
      </xy-popup>
    </div> -->
  
    <!-- <div v-transfer-dom>
      <xy-popup v-model="show13" position="bottom" max-height="50%">
        <div>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </div>
        <div style="padding: 15px;">
          <x-button @click.native="show13 = false" plain type="primary"> Close Me </x-button>
        </div>
      </xy-popup>
    </div> -->
  
  </div>
</template>

<script>

export default {
  // directives: {
  //   TransferDom
  // }, 
  data() {
    return {
      // addressData: ChinaAddressData,
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: '默认空的',
      value6: [],
      show7: false,
      showToast: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      show13: false
    }
  },
  methods: {
    resetScroller() {
      this.$nextTick(() => {
        this.$refs.scroller.reset()
      })
    },
    log(str) {
      console.log(str)
    },
    btnshow() {
      this.show = !this.show
    },
    btnshow1() {
      this.show1 = !this.show1
    },
    btnshow2() {
      this.show2 = !this.show2
    },
    btnshow3() {
      this.show3 = !this.show3
    },
    btnshow4() {
      this.show4 = !this.show4
    },
    btnshow5() {
      this.show5 = !this.show5
    },
    btnshow6() {
      this.show6 = !this.show6
    },
    btnshow7() {
      this.show7 = !this.show7
    },
    btnshow8() {
      this.show8 = !this.show8
    },
    btnshow9() {
      this.show9 = !this.show9
    },
    btnshow10() {
      this.show10 = !this.show10
    },
    btnshow11() {
      this.show11 = !this.show11
    },
    btnshow12() {
      this.show12 = !this.show12
    },
    btnshow13() {
      this.show13 = !this.show13
    },

  },
  watch: {
    show10(val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '../assets/styles/close.scss';
.xy-close {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #999;
  width: 24px;
  height: 24px;
  :before,
  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 24px;
    height: 1px;
    background-color: currentColor;
    transform: rotate(-45deg);
  }
  :after {
    transform: rotate(45deg);
  }
}


.popup0 {
  padding-bottom: 15px;
  height: 200px;
}

.popup1 {
  width: 100%;
  height: 100%;
}

.popup2 {
  padding-bottom: 15px;
  height: 400px;
}

.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}

.position-horizontal-demo {
  position: relative;
  height: 100%;
  .xy-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>
