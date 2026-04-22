<template lang="pug">
.home
  a.ui.teal.button(href='https://www.alearn.org.tw/report.html', target='_blank', rel='noopener noreferrer') 看近期完整報告
    i.arrow.right.icon
  div.polis(data-conversation_id='89bzf78kbn')

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PolisView',
  mounted () {
    // 使用 setTimeout 來延遲執行
    setTimeout(function() {
      // 創建一個 script 元素
      var script = document.createElement('script');
      script.id = 'polis-script'
      script.async = true;
      script.src = 'https://pol.is/embed.js';
      // 將 script 元素添加到 document 的 head 中
      document.head.appendChild(script);
    }, 100); // 延遲時間為 1000 毫秒，即 1 秒
  }
});
</script>

<style type="text/css" scoped>
img {
  border-radius: 15px;
}
</style>
