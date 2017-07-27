<template>
  <a class="xy-datetime weui-cell" :class="{'weui-cell_access': !readonly}" :data-cancel-text="cancel_text" :data-confirm-text="confirm_text" href="javascript:">
    <slot>
      <div>
        <slot name="title">
          <p :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-html="title"></p>
        </slot>
        <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
      </div>
      <div class="weui-cell__ft xy-cell-primary xy-datetime-value" :style="{textAlign: valueTextAlign}">
        {{ _value }}
        <icon class="xy-input-icon" type="warn" v-show="!valid" :title="firstError"></icon>
      </div>
    </slot>
  </a>
</template>
 
<script>
// import Icon from '../icon'
import Picker from './datetimepicker'
// import Group from '../group'
import InlineDesc from '../inline-desc'
import Uuid from '../assets/mixins/uuid'
import format from '../assets/tools/date/format'

export default {
  name: 'xyDatetime',
  mixins: [Uuid],
  components: {
    // Group,
    InlineDesc,
    // Icon
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    title: String,
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: String,
    cancelText: String,
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: String,
    endDate: String,
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean,
    defaultSelectedValue: String
  },
  created() {
    this.isFirstSetValue = false
    this.currentValue = this.value
  },
  data() {
    return {
      currentValue: null,
      valid: true,
      errors: {},
      cancel_text: '取消',
      confirm_text: '确定'
    }
  },
  mounted() {
    const uuid = this.uuid
    this.$el.setAttribute('id', `xy-datetime-${uuid}`)
    if (!this.readonly) {
      this.$nextTick(() => {
        this.render()
      })
    }
  },
  computed: {
    _value() {
      if (!this.currentValue) {
        return this.placeholder || ''
      } else {
        return this.displayFormat ? this.displayFormat(this.currentValue) : this.currentValue
      }
    },
    pickerOptions() {
      const _this = this
      const options = {
        trigger: '#xy-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.xy-datetime-value',
        confirmText: _this.getButtonText('confirm'),
        cancelText: _this.getButtonText('cancel'),
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        defaultSelectedValue: this.defaultSelectedValue,
        onSelect(type, val, wholeValue) {
          if (_this.picker && _this.picker.config.renderInline) {
            _this.$emit('input', wholeValue)
            _this.$emit('on-change', wholeValue)
          }
        },
        onConfirm(value) {
          _this.currentValue = value
        },
        onClear(value) {
          _this.$emit('on-clear', value)
        },
        onHide() {
          _this.$emit('update:show', false)
          _this.validate()
          _this.$emit('on-hide')
        },
        onShow() {
          _this.$emit('update:show', true)
          _this.$emit('on-show')
        }
      }
      if (this.minYear) {
        options.minYear = this.minYear
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear
      }
      return options
    },
    firstError() {
      let key = Object.keys(this.errors)[0]
      return this.errors[key]
    }
  },
  methods: {
    getButtonText(type) {
      if (type === 'cancel' && this.cancelText) {
        return this.cancelText
      } else if (type === 'confirm' && this.confirmText) {
        return this.confirmText
      }
      return this.$el.getAttribute(`data-${type}-text`)
    },
    render() {
      this.$nextTick(() => {
        this.picker && this.picker.destroy()
        this.picker = new Picker(this.pickerOptions)
      })
    },
    validate() {
      if (!this.currentValue && this.required) {
        this.valid = false
        this.errors.required = '必填'
        return
      }
      this.valid = true
      this.errors = {}
    }
  },
  watch: {
    readonly(val) {
      if (val) {
        this.picker && this.picker.destroy()
      } else {
        this.render()
      }
    },
    show(val) {
      if (val) {
        this.picker && this.picker.show(this.currentValue)
      }
    },
    currentValue(val, oldVal) {
      this.$emit('input', val)
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true
        oldVal && this.$emit('on-change', val)
      } else {
        this.$emit('on-change', val)
      }
      this.validate()
    },
    startDate() {
      this.render()
    },
    endDate() {
      this.render()
    },
    format(val) {
      if (this.currentValue) {
        this.currentValue = format(this.currentValue, val)
      }
      this.render()
    },
    value(val) {
      // do not force render when renderInline is true
      if (this.picker && this.picker.config.renderInline) {
        this.currentValue = val
        return
      }
      if (this.currentValue !== val) {
        this.currentValue = val
        this.render()
      }
    }
  },
  beforeDestroy() {
    this.picker && this.picker.destroy()
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
