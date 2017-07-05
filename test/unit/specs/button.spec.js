import Vue from 'vue'
import xyButton from '~/button/index'
// 挂载元素并返回已渲染的文本的工具函数 

console.log(xyButton.name);
function getRenderedText(Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData: propsData }).$mount()
    return vm.$el.textContent
}
describe('xy-button', () => { 
    it('检查选项', () => { 
        expect(xyButton.name).to.equal('xy-btn-style')
        // expect(typeof button.created).toBe('function')
        expect(getRenderedText(xyButton, {
            val: 'abcde'
        })).to.equal('')
        // expect(getRenderedText(button, {
        //     val: '1234'
        // })).toBe('1234')
    })
})