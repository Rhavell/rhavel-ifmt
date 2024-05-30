import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/HomePage.vue'
import Contato from './components/ContatoPage.vue'
import Sobre from './components/SobrePage.vue'

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
