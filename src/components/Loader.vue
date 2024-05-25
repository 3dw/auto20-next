<template lang="pug">
  .hello
    .ui.active.inverted.dimmer
      .ui.big.text.loader
        b {{ myHint }}
        
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoaderComponent',
  data () {
    return {
      hints: [
        '「分享」和「尋找」之間可以相互配對。',
        '地圖介面讓您能夠根據地理位置就近尋找夥伴。',
        '請不要在互助旗上放置過於完整的個人資訊。',
        '建立自己的名簿，方便下次查找特定的朋友。',
        'Andriod手機上點選「安裝應用程式」可以安裝自學2.0',
        'iOS手機上點選「新增至主畫面」可以安裝自學2.0'
      ],
      myHint: '地圖介面讓您能夠根據地理位置就近尋找夥伴。'
    }
  },
  mounted () {
    this.myHint = this.hints[Math.floor(Math.random()*this.hints.length)]
  },
  methods: {
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
b {
  font-size: 20px;
  white-space: pre-line;
  line-height: 1.4;
}
</style>
