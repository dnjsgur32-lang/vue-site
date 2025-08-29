import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import './styles/suit.css'
import './styles/kimch.css'

createApp(App)
.use(router)
.mount('#app')
