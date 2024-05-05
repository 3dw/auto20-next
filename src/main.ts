import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入 Vue Router

// 導入Semantic UI的CSS文件
import 'semantic-ui-css/semantic.min.css'

createApp(App).use(router).mount('#app')