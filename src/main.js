import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStore } from './plugins/pinia.js'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.mount('#app', () => {
  const store = useStore()
  return {
    store
  }
})