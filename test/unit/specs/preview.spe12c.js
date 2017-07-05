import Vue from 'vue'
import preview from '~/preview/index'
// 挂载元素并返回已渲染的文本的工具函数 
function getRenderedText(Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData: propsData }).$mount()
    return vm.$el.textContent
}
describe('xy-preview', () => {
    it('开始传入参数', () => {
        expect(getRenderedText(preview, {
            index: 1, options: { errorMsg: '<div class="pswp__error-msg"> 测试加载1.</div>' }
        })).toBe({
            index: 1, options: { errorMsg: '<div class="pswp__error-msg"> 测试加载1.</div>' }
        })
        expect(getRenderedText(preview, {
            index: 2, options: { errorMsg: '<div class="pswp__error-msg"> 测试加载2.</div>' }
        })).toBe({
            index: 2, options: { errorMsg: '<div class="pswp__error-msg"> 测试加载2.</div>' }
        })
    })
})