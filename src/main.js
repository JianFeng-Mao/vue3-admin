import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App';
import router from './routes';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus, { size: 'small' });

app.mount('#app');
