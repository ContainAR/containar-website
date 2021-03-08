import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js"
import scrollto from 'vue-scrollto';

createApp(App).use(router).use(scrollto).mount('#app')
