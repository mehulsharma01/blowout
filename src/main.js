import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';

const vueinit = createApp(App);
vueinit.use(store);
vueinit.use(router);

vueinit.mount("#app")