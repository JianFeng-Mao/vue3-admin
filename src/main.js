import { createApp } from 'vue';
import './styles/index.scss';
import App from './App.vue';
import pinia from './stores';
import router from './routes';

const app = createApp(App);

app.use(pinia);

app.use(router);

app.mount('#app');
