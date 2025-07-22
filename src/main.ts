import { createApp } from 'vue'
import App from './App.vue'
import  { router }  from './router'
import VueGtag from "vue-gtag"

//引入i18n
import i18n from './i18n'

import 'semantic-ui-css/semantic.min.css'

const app = createApp(App)

// 使用Vue Router
app.use(router)
//安装i18n
app.use(i18n)

app.use(VueGtag, {
    config: { 
      id: "G-GNTJVRF63Z",
    },
  }, router); // <----- add your router here

app.mount('#app')

