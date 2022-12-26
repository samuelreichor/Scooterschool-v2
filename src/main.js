import { createApp } from 'vue'
import '../public/css/app.pcss'
import App from './App.vue'
import router from "./router/index.js"

createApp(App).use(router).mount('#app')
