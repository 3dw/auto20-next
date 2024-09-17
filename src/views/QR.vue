<template lang="pug">
  .home
    .qr-container
      h2.ui.header.no-print 展示此QR碼，給您的朋友掃描
      
      .qr-code-wrapper.no-print
        h2.name {{ formatName(users && users[uid] && users[$route.params.uid] ? users[$route.params.uid].name : '') }}
        vue-qrcode(:value="'https://we.alearn.org.tw/flag/' + $route.params.uid", :color ="{ dark: '#f39c04', light: '#fff' }")
      
      .print-only.business-card
        h2.name {{ formatName(users && users[uid] && users[$route.params.uid] ? users[$route.params.uid].name : '') }}
        .qr-code-wrapper
          vue-qrcode(:value="'https://we.alearn.org.tw/flag/' + $route.params.uid", :color ="{ dark: '#f39c04', light: '#fff' }")
      
      button.ui.green.button.no-print(@click="printPage")
        i.print.icon
        | 列印
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
        default: () => ({}),
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
  
  .print-only {
    display: none;
  }
  
  .ui.green.button {
    margin-top: 20px;
  }
  
  @media print {
    .home {
      background-color: #ffffff;
      padding: 0;
      min-height: auto;
    }
    
    .qr-container {
      border: none;
      box-shadow: none;
      padding: 0;
    }
    
    .no-print {
      display: none;
    }
    
    .print-only {
      display: block;
    }
    
    .business-card {
      width: 90mm;
      height: 120mm;
      padding: 10mm;
      border: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: space-between; // 分散對齊
      align-items: center;
      position: relative; // 添加相對定位
    }
    
    .name {
      font-size: 24pt;
      font-weight: bold;
      margin-right: 10mm; // 在名字和 QR 碼之間添加一些間距
    }
    
    .qr-code-wrapper {
      position: static; // 移除絕對定位
      transform: none; // 移除變換
      max-width: 30mm; // 限制 QR 碼的最大寬度
      max-height: 30mm; // 限制 QR 碼的最大高度
    }
    
    .ui.green.button {
      display: none;
    }
  }
  </style>
