import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import quasarOptions from './utils/quasar'

// Import icon libraries
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)
const pinia=createPinia()

app.use(pinia)
app.use(router)
app.use(Quasar,quasarOptions)

app.mount('#app')
