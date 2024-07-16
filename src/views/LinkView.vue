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
    max-width: 600px;
    margin: 0 auto;
  }
  
  .button {
    color: #ffffff; /* 白色文字 */
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid transparent;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .button.primary {
    background-color: #0056b3; /* 深藍色背景 */
    border-color: #0056b3;
  }
  
  .button.primary:hover {
    background-color: #004494; /* 懸停時更深的藍色背景 */
    border-color: #004494;
  }
  
  .button.primary:active {
    background-color: #003366; /* 點擊時最深的藍色背景 */
    border-color: #003366;
  }
  
  .button.secondary {
    background-color: #007bff; /* 較亮的藍色背景 */
    border-color: #007bff;
  }
  
  .button.secondary:hover {
    background-color: #0069d9; /* 懸停時更深的亮藍色背景 */
    border-color: #0069d9;
  }
  
  .button.secondary:active {
    background-color: #0056b3; /* 點擊時最深的亮藍色背景 */
    border-color: #0056b3;
  }
  
  .button.tertiary {
    background-color: #28a745; /* 綠色背景 */
    border-color: #28a745;
  }
  
  .button.tertiary:hover {
    background-color: #218838; /* 懸停時更深的綠色背景 */
    border-color: #218838;
  }
  
  .button.tertiary:active {
    background-color: #1e7e34; /* 點擊時最深的綠色背景 */
    border-color: #1e7e34;
  }
  
  .button.quaternary {
    background-color: #dc3545; /* 紅色背景 */
    border-color: #dc3545;
  }
  
  .button.quaternary:hover {
    background-color: #c82333; /* 懸停時更深的紅色背景 */
    border-color: #c82333;
  }
  
  .button.quaternary:active {
    background-color: #bd2130; /* 點擊時最深的紅色背景 */
    border-color: #bd2130;
  }
  
  .button.quinary {
    background-color: #ffc107; /* 黃色背景 */
    border-color: #ffc107;
  }
  
  .button.quinary:hover {
    background-color: #e0a800; /* 懸停時更深的黃色背景 */
    border-color: #e0a800;
  }
  
  .button.quinary:active {
    background-color: #c69500; /* 點擊時最深的黃色背景 */
    border-color: #c69500;
  }
  </style>
  