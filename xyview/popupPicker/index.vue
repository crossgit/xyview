<template>
    <div class="xy-cell-box">
        <div class="weui-cell xy-tap-active weui-cell_access" @click="onClick" v-show="showCell">
            <div class="weui-cell__hd">
                <slot name="title" label-class="weui-label" :label-style="labelStyles" :label-title="title">
                    <label class="weui-label" :style="labelStyles" v-if="title" v-html="title"></label>
                </slot>
                <inline-desc v-if="inlineDesc">{{ inlineDesc }}</inline-desc>
            </div>
            <div class="xy-cell-primary xy-popup-picker-select-box">
                <div class="xy-popup-picker-select" :style="{textAlign: valueTextAlign}">
                    <span class="xy-popup-picker-value" v-if="!displayFormat && !showName && value.length">{{value | array2string}}</span>
                    <span class="xy-popup-picker-value" v-if="!displayFormat && showName && value.length">{{value | value2name(data)}}</span>
                    <span class="xy-popup-picker-value" v-if="displayFormat && value.length">{{ displayFormat(value, value2name(value, data)) }}</span>
                    <span v-if="!value.length && placeholder" v-text="placeholder" class="xy-popup-picker-placeholder"></span>
                </div>
            </div>
            <div class="weui-cell__ft">
            </div>
        </div>
    
        <div v-transfer-dom="isTransferDom">
            <popup v-model="showValue" class="xy-popup-picker" :id="`xy-popup-picker-${uuid}`" @on-hide="onPopupHide" @on-show="onPopupShow" :popup-style="popupStyle">
                <div class="xy-popup-picker-container">
                    <div class="xy-popup-picker-header" @touchmove.prevent>
                        <flexbox>
                            <flexbox-item class="xy-popup-picker-header-menu xy-popup-picker-cancel" @click.native="onHide(false)">{{ cancelText || "取消" }}</flexbox-item>
                            <flexbox-item class="xy-popup-picker-header-menu xy-popup-picker-header-menu-right" @click.native="onHide(true)">{{ confirmText || "完成" }}</flexbox-item>
                        </flexbox>
                    </div>
                    <picker :data="data" v-model="tempValue" @on-change="onPickerChange" :columns="columns" :fixed-columns="fixedColumns" :container="'#xy-popup-picker-'+uuid" :column-width="columnWidth"></picker>
                </div>
            </popup>
        </div>
    
    </div>
</template>
 
<script>
import xyPicker from '../picker'
// import Cell from '../cell' // ????
import xyPopup from '../popup'
import xyInlineDesc from '../inlineDesc'
import { xyFlexbox, xyFlexboxItem } from '../flexbox'
import array2string from '../filters/array2String'
import value2name from '../filters/value2name'
import uuidMixin from '../assets/mixins/uuid'
import TransferDom from '../directives/transfer-dom'

const getObject = function (obj) {
    return JSON.parse(JSON.stringify(obj))
}

export default {
    name: 'xyPopupPicker',
    directives: {
        TransferDom
    },
    created() {
        if (typeof this.show !== 'undefined') {
            this.showValue = this.show
        }
    },
    mixins: [uuidMixin],
    components: {
        xyPicker,
        // Cell,
        xyPopup,
        xyFlexbox,
        xyFlexboxItem,
        xyInlineDesc
    },
    filters: {
        array2string,
        value2name
    },
    props: {
        valueTextAlign: {
            type: String,
            default: 'right'
        },
        title: String,
        cancelText: String,
        confirmText: String,
        data: {
            type: Array,
            default() {
                return []
            }
        },
        placeholder: String,
        columns: {
            type: Number,
            default: 0
        },
        fixedColumns: {
            type: Number,
            default: 0
        },
        value: {
            type: Array,
            default() {
                return []
            }
        },
        showName: Boolean,
        inlineDesc: [String, Number, Array, Object, Boolean],
        showCell: {
            type: Boolean,
            default: true
        },
        show: Boolean,
        displayFormat: Function,
        isTransferDom: {
            type: Boolean,
            default: true
        },
        columnWidth: Array,
        popupStyle: Object
    },
    computed: {
        labelStyles() {
            return {
                display: 'block',
                width: this.$parent.labelWidth || this.$parent.$parent.labelWidth,
                textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
                marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
            }
        }
    },
    methods: {
        value2name,
        getNameValues() {
            return value2name(this.currentValue, this.data)
        },
        onClick() {
            this.showValue = true
        },
        onHide(type) {
            this.showValue = false
            if (type) {
                this.closeType = true
                this.currentValue = getObject(this.tempValue)
            }
            if (!type) {
                this.closeType = false
                if (this.value.length > 0) {
                    this.tempValue = getObject(this.currentValue)
                }
            }
        },
        onPopupShow() {
            // reset close type to false
            this.closeType = false
            this.$emit('on-show')
        },
        onPopupHide(val) {
            if (this.value.length > 0) {
                this.tempValue = getObject(this.currentValue)
            }
            this.$emit('on-hide', this.closeType)
        },
        onPickerChange(val) {
            if (JSON.stringify(this.currentValue) !== JSON.stringify(val)) {
                // if has value, replace it
                if (this.value.length) {
                    const nowData = JSON.stringify(this.data)
                    if (nowData !== this.currentData && this.currentData !== '[]') {
                        this.tempValue = getObject(val)
                    }
                    this.currentData = nowData
                } else { // if no value, stay quiet
                    // if set to auto update, do update the value
                }
            }
            this.$emit('on-shadow-change', getObject(val))
        }
    },
    watch: {
        value(val) {
            if (JSON.stringify(val) !== JSON.stringify(this.tempValue)) {
                this.tempValue = getObject(val)
            }
        },
        currentValue(val) {
            this.$emit('input', getObject(val))
            this.$emit('on-change', getObject(val))
        },
        show(val) {
            this.showValue = val
        }
    },
    data() {
        return {
            onShowProcess: false,
            tempValue: getObject(this.value),
            closeType: false,
            currentData: JSON.stringify(this.data), // used for detecting if it is after data change
            showValue: false,
            currentValue: this.value
        }
    }
}
</script>

<style lang="scss">
@import '../assets/styles/variable.scss';
@import '../assets/styles/1px.scss';
.weui-cell {
    padding: 10px 15px;
    position: relative; //这个是为了兼容cells容器onepx方案被before挡住而做的
    display: flex;
    align-items: center;
    &:before {
        .setTopLine {color:#D9D9D9};
        left: 15px;
    }
    &:first-child {
        &:before {
            display: none;
        }
    }
}

.weui-cell_access {
    // .setTapColor();
    color: inherit;
    &:active {
        background-color: #ECECEC;
    }
    .weui-cell__ft {
        padding-right: 13px;
        position: relative;
        &:after {
            content: " "; // .setArrow(right, $cell-default-arrow-width, $cell-default-arrow-color, $cell-default-arrow-border-width);
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: 2px;
        }
    }
}

.weui-cell__hd {
    position: relative;
    :after {
        .setRightLine{color:#D9D9D9};
    }
    :before {
        content: " ";
        // .setArrow(right, 6px, #C8C8CD, 2px);

        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -4px;
    }
}

.xy-cell-primary {
    flex: 1;
}

.xy-cell-box {
    position: relative;
}

.xy-cell-box:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    left: 15px;
}

.xy-popup-picker-header {
    height: 44px;
    color: $popup-picker-header-text-color;
    background-color: $popup-picker-header-bg-color;
    font-size: $popup-picker-header-font-size;
    position: relative; 
    :after {
        .setBottomLine{color:#e5e5e5};
    }
}

// .xy-popup-picker-value {
//     /* display: inline-block; */
// }
.xy-popup-picker-header-menu {
    text-align: left;
    padding-left: 15px;
    line-height: 44px;
}

.xy-popup-picker-header-menu-right {
    text-align: right;
    padding-right: 15px;
}

.xy-popup-picker-select {
    width: 100%;
    position: relative;
}

.xy-popup-picker-select-box.weui-cell__bd:after {
    content: " ";
    display: inline-block;
    transform: rotate(45deg);
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -3px;
}

.xy-popup-picker-cancel {
    color: $popup-picker-header-cancel-text-color;
}

.xy-popup-picker-placeholder {
    color: #999;
}
</style>
