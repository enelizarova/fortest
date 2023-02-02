import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HelloWorld from '../components/HelloWorld.vue'

describe("HelloWorld.vue", () => {
  it("renders props when passed", () => {
    const title = "Hello";
    const nav = [];
    const num = 13;
    const wrapper = mount(HelloWorld, {
      props: { title, nav, num}
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.props()).toEqual({ title: 'Hello', nav: [], num: 13 })
    expect(wrapper.vm.title).toMatch('Hello')

  });
  it("renders props where you want", () => {
    const title = "Hello";
    const wrapper = mount(HelloWorld, {
      props: { title }
    });

    expect(wrapper.find('h1').html()).toBe('<h1>Say Hello</h1>')
  })
  it("what about Array?", () => {
    const wrapper = mount(HelloWorld, {
      props: { nav: ['First', 'Second'] }
    });

    const secondA = wrapper.findAll('a').at(1)

    expect(secondA.text()).toBe('Second')
  })

  it("What if I change prop?", async() => {
    const wrapper = mount(HelloWorld, {
      props: { num: 13 }
    });

    expect(wrapper.html()).toContain('13')

    await wrapper.setProps({ num: 999 })

    expect(wrapper.html()).toContain(999)

  })
});


describe("Attrs Part", () => {
  it('attrs', async() => {
    const wrapper = mount(HelloWorld, {
    attrs: {
      autoplay: ""
    }
  })

  expect(wrapper.find('audio').attributes()).toContain({
    autoplay: ""
  })
  
  await wrapper.find('button').trigger('click')

  expect(wrapper.find('audio').attributes()).not.toContain({ autoplay: "" })
})
})