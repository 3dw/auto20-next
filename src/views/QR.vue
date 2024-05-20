<template lang="pug">
.home
  h2 展示此QR碼，給您的朋友掃描
  img#main-img(src="../assets/qr-code.png")

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QrView',
});
</script>

<style type="text/css" scoped>
img#main-img {
  width: 33vmin !important;
  border-radius: 15px;
}
</style>
