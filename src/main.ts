import { createApp } from 'vue'
import App from './App.vue'
import  { router, i18n }  from './router'
import 'semantic-ui-css/semantic.min.css'



const app = createApp(App)

// 使用Vue Router
app.use(router)
//安装i18n
app.use(i18n)

app.mount('#app')

