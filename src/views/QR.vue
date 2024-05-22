<template lang="pug">
.home
  h2 展示此QR碼，給您的朋友掃描
  vue-qrcode(:value="'https://auto20-next.pages.dev/#/flag/' + $route.params.uid", :color ="{ dark: '#f39c04', light: '#fff' }")

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueQrcode from 'vue-qrcode'

export default defineComponent({
  name: 'QrView',
  components: {
    VueQrcode,
  },
});
</script>

<style type="text/css" scoped>
img {
  border-radius: 15px;
}
</style>
