<template lang="pug">
  .home
    .qr-container
      h2.ui.header.no-print 展示此QR碼，給您的朋友掃描
      
      .business-card(v-for="i in [1,2,3,4,5,6]", :key="i", :class="i == 1 ? 'visible' : 'print-only'")
        h2.name {{ formatName(users && users[uid] && users[$route.params.uid] ? users[$route.params.uid].name : '') }}
          
        .business-card-content
          .business-card-content-text
            p.text-left 連絡方式：{{ users && users[uid] && users[$route.params.uid] ? users[$route.params.uid].connect_me : '' }}
            p.text-left {{ $t('contact.availableTime') }}
              br
              | {{ users && users[uid] && users[$route.params.uid] ? users[$route.params.uid].freetime : '' }}

        .qr-code-wrapper
          vue-qrcode(:value="'https://we.alearn.org.tw/flag/' + $route.params.uid", :color="{ dark: '#000000FF', light: '#fff' }")

        .business-card-footer
          .business-card-footer-text 掃描此QR碼，前往自學2.0

      button.ui.green.button.no-print(@click="printPage")
        i.print.icon
        | 列印名片
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import VueQrcode from 'vue-qrcode';
  
  export default defineComponent({
    name: 'QrView',
    props: {
      users: {
        type: Object,
        required: false,
        default: () => ({})
      },
      uid: {
        type: String,
        required: true,
      },
    },
    components: {
      VueQrcode,
    },
    methods: {
      printPage() {
        window.print();
      },
      formatName(name: string): string {
        return name.replace(/\(.*?\)/g, '').trim();
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center; // 新增這行
  }
  
  .qr-container {
    text-align: center;
  }
  
  h2.ui.header {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
  
  .ui.green.button {
    margin-top: 20px;
    display: inline-block; // 改為 inline-block 以顯示按鈕
  }

  .business-card {
    position: relative;
    width: 54mm;
    height: 90mm; // 調整高度為 54mm
    padding: 2mm;
    border: 1px solid #000;
    border-radius: 10mm; // 添加圓角
    display: flex;
    flex-direction: column;
    justify-content: space-between; // 分散對齊
    align-items: center;
    background-color: #fff; // 添加背景色
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); // 添加更多陰影以增加立體感
    margin: auto; // 新增這行
  }

  .name {
    font-size: 14pt;
    font-weight: bold;
    line-height: 1;
  }
  
  .qr-code-wrapper {
    max-width: 30mm;
    max-height: 30mm;
  }
  
  .business-card-footer {
    width: 100%;
    text-align: center;
    font-size: 8pt; // 調整字體大小
    color: #555; // 調整字體顏色
  }

  .business-card-footer-text {
    font-style: italic; // 添加斜體
  }
  
  .business-card-content {
    width: 100%;
    text-align: left;
    font-size: 10pt; // 調整字體大小
    color: #555; // 調整字體顏色
  }
  
  .business-card-content-text p {
    font-size: 10pt; // 調整 p 裡的字體大小
    margin: 5px 0; // 添加間距
  }

  .business-card.print-only {
    padding: 0 !important;
  }

  @media print {
    .home {
      background-color: #ffffff;
      padding: 0;
      min-height: auto;
      display: flex;
      flex-wrap: wrap; // 新增這行
    }
    
    .qr-container {
      border: none;
      box-shadow: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap; // 新增這行
    }

    .business-card.print-only {
      padding: 2mm !important;
    }
    
    .ui.green.button {
      display: none; // 在打印時仍然隱藏按鈕
    }

  }
  </style>
