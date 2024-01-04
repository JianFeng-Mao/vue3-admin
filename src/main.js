import { createApp } from 'vue';
import './styles/index.scss';
import pinia from '@/stores';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router).use(pinia);

app.mount('#app');
