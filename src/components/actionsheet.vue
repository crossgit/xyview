<template>
    <div id="actionsheet">
        <button @click="btnshow4">显示与隐藏</button>
        <!-- <xy-action-sheet></xy-action-sheet> -->
        <xy-action-sheet v-model="show1" :menus="menus1" @on-click-menu="click"></xy-action-sheet>
        <xy-action-sheet v-model="show4" :menus="menus1" @on-click-menu="click" :close-on-clicking-mask="false" show-cancel @on-click-mask="console('on click mask')"></xy-action-sheet>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show1: false,
            menus1: {
                menu1: '拍照',
                menu2: '相册'
            },
            show2: false,
            menus2: {
                menu1: 'Take Photo',
                menu2: 'Choose from photos'
            },
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            menus5: [{
                label: 'actionsheet header',
                type: 'info'
            }, {
                label: 'Primary',
                type: 'primary',
                value: 'primary'
            }, {
                label: 'Warn',
                type: 'warn'
            }, {
                label: 'Disabled',
                type: 'disabled'
            }, {
                label: 'Default'
            }],
            menu7: {
                menu1: '北京烤鸭',
                menu2: '陕西油泼面',
                menu3: '西安肉夹馍'
            },
            showSuccess: false,
            menus3: {
                'title.noop': 'actionsheet header',
                delete: '<span style="color:red">Delete</span>'
            },
            menus8: {
                menu1: 'Close me',
                menu2: 'Close me'
            }
        }
    },
    methods: {
        console(msg) {
            // 阴影点击事件
            console.log(msg)
        },
        click(key) {
            // 弹出按钮点击事件,依赖key区分,key对应menu1内的值,取消是cancel,默认取消
            console.log(key);
        },
        btnshow4() {
            this.show4 = !this.show4;
        }
    }
}
</script>
