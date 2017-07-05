/// Import Vue and the component being tested
 
import Vue from 'vue'
import MyComponent from '~/hello/hello.vue'

console.log(MyComponent.data)
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof MyComponent.created).to.equal('function')
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).to.equal('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).to.equal('hello!')
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount()
    expect(vm.message).to.equal('bye!')
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).to.equal('bye!')
  })
})