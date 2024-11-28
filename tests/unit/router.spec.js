import { createRouter, createWebHistory } from 'vue-router';
import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

const routes = [{ path: '/', name: 'Home', component: Home }];
const router = createRouter({ history: createWebHistory(), routes });

describe('Router', () => {
  it('existe el componente Home', async () => {
    const wrapper = mount(Home, { global: { plugins: [router] } });
    expect(wrapper.exists()).toBe(true);
  });
});
