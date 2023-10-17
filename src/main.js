import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js"
import scrollto from 'vue-scrollto';
import cors from 'cors'

createApp(App).use(router).use(cors).use(scrollto).mount('#app')
