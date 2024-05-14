<template lang="pug">
  .hello
    .ui.active.inverted.dimmer
      .ui.big.text.loader Loading...
        
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoaderComponent',
  data () {
    return {
    }
  },
  methods: {
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
