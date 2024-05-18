<template lang="pug">
.hello
  h1.ui.header
    img(src="../assets/handshake0.png")
    | 自學2.0使用說明
    img(src="../assets/handshake0.png")

  .ui.grid.container
    .ui.two.column.stackable.row
      .ui.padded.segment.column
        h2.ui.header 自學2.0是什麼？
        p 自學2.0是一個公益尋友平台，旨在透過地理位置、個人興趣及專長來協助用戶尋找朋友。平台的核心功能「互助旗」提供公開的自我介紹，讓人們在見面前能初步了解和認識對方。
        h2.ui.header 這是什麼單位在設計及維護的？
        p 本平台由非營利組織
          a(href="http://www.alearn.org.tw", target="_blank") 中華民國自主學習促進會
          | 設計及維護
        h2.ui.header 互助旗是什麼？
        p 互助旗是一個帶有概略地理位置的自我介紹，讓人在和您碰面之前，先對您有初步的瞭解和認識
        h2.ui.header 互助旗需更新嗎？
        p 為了讓有需要的朋友可以找到您，請至少一年更新一次您的互助旗。系統會自動隱藏一年以上未更新之互助旗。若兩年以上未更新，系統會刪除您的互助旗。
      .ui.padded.segment.column
        h2.ui.header 我的互助旗會是公開的嗎？能不能保密？
        p 互助旗是完全公開的，您可以只留下願意公開的資訊，請參考
          router-link(to="privacy-policy") 隱私權政策
        h2.ui.header 升起互助旗後可以修改嗎？
        p 可以，只要再次登入，點選「我的旗幟」即可修改
        h2.ui.header 升起互助旗後可以移除嗎？
        p 可以，您可以
          a(href="mailto:bestian@gmail.com") e-mail給管理員bestian@gmail.com
          | 手動移除
        h2.ui.header 地圖介面有什麼用意
        p 地圖讓您可以就近尋找夥伴，例如:[宜蘭附近有沒有自學朋友呢]？ 看地圖就很清楚了。

</template>

<style type="text/css" scoped>
  h2, p {
    text-align: left;
  }

  p {
    font-size: 16px;
  }
</style>