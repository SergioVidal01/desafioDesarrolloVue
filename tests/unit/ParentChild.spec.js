import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('ParentChild communication', () => {
  it('envía texto del Child al Parent', async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent(Child);
    child.vm.$emit('enviar', 'Hola Mundo');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Hola Mundo');
  });
});
