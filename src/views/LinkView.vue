<!-- <template lang="pug">
.hello
  .ui.vertical.large.buttons
    a.ui.blue.button(href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef") 星河計畫-自學生經驗匯流
    a.ui.lightpurple.button(href="https://math.alearn.org.tw") 自由數學
</template>

<style type="text/css" scoped>

</style> -->
<template lang="pug">
  .hello
    .buttons-container
      a.button.primary(href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef") 星河計畫-自學生經驗匯流
      a.button.secondary(href="https://math.alearn.org.tw") 自由數學
      a.button.tertiary(href="https://sites.google.com/view/autoalearn") 自主學習促進會
      a.button.quaternary(href="https://map.alearn.org.tw/#/") 自學地圖
      a.button.quinary(href="https://playback.bestian.tw/") Playback劇場
  </template>
  
  <style type="text/css" scoped>
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  
  .button {
    color: #ffffff; /* 白色文字 */
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid transparent;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    width: 300px; /* 固定長度 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* 第一個按鈕的樣式 */
  .button.primary {
    background-color: #0056b3; /* 深藍色背景 */
  }
  
  .button.primary:hover {
    background-color: #004494; /* 懸停時更深的藍色背景 */
  }
  
  .button.primary:active {
    background-color: #003366; /* 點擊時最深的藍色背景 */
  }
  
  /* 第二個按鈕的樣式 */
  .button.secondary {
    background-color: #007bff; /* 較亮的藍色背景 */
  }
  
  .button.secondary:hover {
    background-color: #0069d9; /* 懸停時更深的亮藍色背景 */
  }
  
  .button.secondary:active {
    background-color: #0056b3; /* 點擊時最深的亮藍色背景 */
  }
  
  /* 第三個按鈕的樣式 */
  .button.tertiary {
    background-color: #28a745; /* 綠色背景 */
  }
  
  .button.tertiary:hover {
    background-color: #218838; /* 懸停時更深的綠色背景 */
  }
  
  .button.tertiary:active {
    background-color: #1e7e34; /* 點擊時最深的綠色背景 */
  }
  
  /* 第四個按鈕的樣式 */
  .button.quaternary {
    background-color: #dc3545; /* 紅色背景 */
  }
  
  .button.quaternary:hover {
    background-color: #c82333; /* 懸停時更深的紅色背景 */
  }
  
  .button.quaternary:active {
    background-color: #bd2130; /* 點擊時最深的紅色背景 */
  }
  
  /* 第五個按鈕的樣式 */
  .button.quinary {
    background-color: #ffc107; /* 黃色背景 */
  }
  
  .button.quinary:hover {
    background-color: #e0a800; /* 懸停時更深的黃色背景 */
  }
  
  .button.quinary:active {
    background-color: #c69500; /* 點擊時最深的黃色背景 */
  }
  </style>
  