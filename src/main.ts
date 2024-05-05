import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'semantic-ui-css/semantic.min.css'

const app = createApp(App)

// 使用VueAxios插件
app.use(VueAxios, axios)

// 使用Vue Router
app.use(router)

app.mount('#app')
