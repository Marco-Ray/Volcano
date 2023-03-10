/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'animate.css';
import '@/assets/fonts/fonts.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import debounce from '@/mixins/debounce';

const app = createApp(App);
app.mixin(debounce);
app.use(store).use(router).use(ElementPlus)
  .mount('#app');
