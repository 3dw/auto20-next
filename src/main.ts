import { createApp } from 'vue'
import App from './App.vue'
import  { router }  from './router'
import VueGtag from "vue-gtag"

//引入i18n
import { createI18n } from 'vue-i18n'
import enLocale from './i18n/en/index'
import zhLocale from './i18n/zh/index'

import 'semantic-ui-css/semantic.min.css'

//创建i18n对象
const i18n = createI18n({
  locale:localStorage.getItem('lang') || "zh", //默认显示的语言 
  fallbackLocale: localStorage.getItem('lang') || "zh",//预设语言环境
  globalInjection: true, //全局生效$t
  legacy:false,
  messages:{
    zh: zhLocale,
    en: enLocale,
  }
})

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

