<template lang="pug">
  .hello
    .ui.active.inverted.dimmer
      .ui.big.text.loader
        b {{ myHint }}
        
</template>

<script>

import { defineComponent } from 'vue';
import { hints } from '../data/hints';

export default defineComponent({
  name: 'LoaderComponent',
  data () {
    return {
      hints: hints,
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
