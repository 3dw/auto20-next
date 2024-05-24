import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.min.css'

const app = createApp(App)

// 使用Vue Router
app.use(router)

app.mount('#app')