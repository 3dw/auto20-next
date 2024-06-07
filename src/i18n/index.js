// i18n/index.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: 'Welcome',
    // 添加更多英文翻譯
  },
  zh: {
    welcome: '歡迎',
    // 添加更多中文翻譯
  },
};

const i18n = new VueI18n({
  locale: 'en', // 設置默認語言
  messages,
});

export default i18n;
