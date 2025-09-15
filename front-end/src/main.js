import { createApp } from 'vue'
import App from './components/App.vue'
import router from './routes/index.js'
import ToastService from 'primevue/toastservice'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(ToastService)
app.use(router)
app.use(PrimeVue)
app.mount('#app')

