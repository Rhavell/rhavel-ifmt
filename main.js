// main.js

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Contato from './components/Contato.vue'
import Sobre from './components/Sobre.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato },
  { path: '/sobre', component: Sobre }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
