import { ComponentCustomProperties } from 'vue'
import { I18n } from 'vue-i18n'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $i18n: I18n & {
      locale: string
    }
  }
} 