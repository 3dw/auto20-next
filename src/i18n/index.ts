import { createI18n } from 'vue-i18n'
import enLocale from './en/index'
import zhLocale from './zh/index'

// 創建 i18n 實例
const i18n = createI18n({
  locale: localStorage.getItem('lang') || "zh", // 默認顯示的語言 
  fallbackLocale: localStorage.getItem('lang') || "zh", // 預設語言環境
  globalInjection: true, // 全局生效 $t
  legacy: false,
  messages: {
    zh: zhLocale,
    en: enLocale,
  }
})

export default i18n 