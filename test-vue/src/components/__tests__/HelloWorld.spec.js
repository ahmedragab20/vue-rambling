import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import HelloWorld from '../HelloWorld.vue';

describe('testing the Helloworld.vue', () => {
  test('that the message is displayed correctly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'hello gang',
      },
    });

    expect(wrapper.props().msg).toBe('hello gang');
  });
  test('that the message is rendered correctly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'hello gang',
      },
    });

    const msgEl = wrapper.find("[data-test='msg']");

    expect(msgEl.text()).toBe('hello gang');
  });
});
