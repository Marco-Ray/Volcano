import { createApp } from 'vue';
import Element from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css';
import 'animate.css';
import '@/assets/fonts/fonts.css';

createApp(App).use(store).use(router).use(Element)
  .mount('#app');
