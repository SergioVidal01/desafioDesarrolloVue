import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');

import router from './router';

createApp(App).use(router).mount('#app');
