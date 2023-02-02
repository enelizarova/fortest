import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MyLayout from '../MyLayout.vue'

describe("MyLayout", () => {
  it("renders props when passed", () => {
    const title = "Hello";
    const wrapper = mount(MyLayout, {
      props: { title }
    });

    expect(wrapper.find('h1').text()).toContain(title);
  });

  it("what about Array?", () => {
    const wrapper = mount(MyLayout, {
      props: { nav: ['First', 'Second'] }
    });

    const arr = wrapper.findAll('a')
    const firstItem = wrapper.findAll('a').at(0)
    const secondItem = wrapper.findAll('a').at(1)

    expect(arr).toHaveLength(2)
    expect(firstItem.text()).toContain('First')
    expect(secondItem.text()).toContain('Second')
  })

  it("What if I change prop?", async() => {
    const wrapper = mount(MyLayout, {
      props: { num: 13 }
    });
    const h2 = wrapper.find('h2')

    expect(h2.text()).toContain('13')

    await wrapper.setProps({ num: 999 })

    expect(h2.text()).toContain('999')
  })

  it('Lets look at attrs & classes', () => {
    const wrapper = mount(MyLayout, {
      attrs: {
        id: "hello",
        class: "world"
      }
    })

    expect(wrapper.find('.lay').attributes('id')).toBe('hello')
    expect(wrapper.find('.lay').classes('world')).toBe(true)
  })
});
