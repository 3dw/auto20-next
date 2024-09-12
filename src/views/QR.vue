<template lang="pug">
  .home
    .qr-container
      h2.ui.header 展示此QR碼，給您的朋友掃描
      .qr-code-wrapper
        vue-qrcode(:value="'https://we.alearn.org.tw/flag/' + $route.params.uid", :color ="{ dark: '#f39c04', light: '#fff' }")
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import VueQrcode from 'vue-qrcode';
  
  export default defineComponent({
    name: 'QrView',
    components: {
      VueQrcode,
    },
  });
  </script>
  
  <style type="text/css" scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f8f9fa; /* 淺灰色背景 */
    padding: 20px;
  }
  
  .qr-container {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 40px;
    text-align: center;
  }
  
  .qr-code-wrapper {
    margin-top: 20px;
  }
  
  h2.ui.header {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  img {
    border-radius: 15px;
  }
  </style>
  