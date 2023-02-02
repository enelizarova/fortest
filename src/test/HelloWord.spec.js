import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HelloWorld from '../components/HelloWorld.vue'

describe("HelloWorld", () => {
  it("renders props when passed", () => {
    const title = "Hello";
    const wrapper = mount(HelloWorld, {
      props: { title }
    });

    expect(wrapper.find('h1').text()).toContain(title);
  });

  it("what about Array?", () => {
    const wrapper = mount(HelloWorld, {
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
    const wrapper = mount(HelloWorld, {
      props: { num: 13 }
    });
    const h2 = wrapper.find('h2')

    expect(h2.text()).toContain('13')

    await wrapper.setProps({ num: 999 })

    expect(h2.text()).toContain('999')
  })

  it('Lets look at attrs', () => {
    const wrapper = mount(HelloWorld, {
      attrs: {
        type: "button"
      }
    })

    expect(wrapper.find('button').attributes()).toContain({
      type: "button"
    })
  })

  it('Lets look at classes', () => {
    const wrapper = mount(HelloWorld)
    const btn = wrapper.find('.button');

    expect(btn.classes()).toContain('button')
  })
});
