<template lang="pug">
.hello
  h1.ui.header
    img(src="../assets/handshake1.webp", alt="互助互惠")
    | {{ $t('about.intro') }}
    img(src="../assets/handshake1.webp", alt="互助互惠")

  .ui.grid.container
    .ui.two.column.stackable.row
      .ui.padded.segment.column
        h2.ui.header {{$t('about.what_is_auto20')}}
        p 
          b {{$t('about.auto20')}}
          | {{$t('about.intro_1')}}
        p 
          b {{$t('about.al')}}
          | {{$t('about.intro_2')}}
        p
          | {{$t('about.intro_3')}}
        h2.ui.header 自學2.0由誰在設計及維護？
        p 本平台由非營利組織
          a(href="http://www.alearn.org.tw", target="_blank") 中華民國自主學習促進會
          | 設計及維護，致力於提供一個安全且友善的環境，讓大家能夠自由地尋找學習夥伴。
        p 免付費、無業配廣告下，伺服器的流量承載有限。若發生無法連線，請擇日再瀏覽，謝謝。
        h2.ui.header 雲端名片與互助旗是什麼？
        p 
          b 雲端名片
          | 是一個帶有概略地理位置的自我介紹功能，讓人在與您見面之前，便能對您的興趣、專長及背景有初步的認識，從而更容易找到志同道合的朋友。
        p 系統會自動依據您的概略地理位置，在地圖上給予您適當的位置，像是插上一支旗子。故又稱為「互助旗」。
        p 
          | 當您建立雲端名片之後，系統會提供您一個專屬的網址，可以用來自我介紹。
        p
          router-link(to="/profile") 升起互助旗
          i.chevron.right.icon
        h2.ui.header 互助旗需更新嗎？
        p 為了讓有需要的朋友能夠順利找到您，請更期更新一次您的互助旗，特別是搬家之後。
        h2.ui.header 我的互助旗會是公開的嗎？能不能保密？
        p 互助旗是完全公開的，您可以選擇只留下您願意公開的資訊。請參考我們的
          router-link(to="privacy-policy") 隱私權政策
          |，以了解如何更好地保護您的隱私。
        h2.ui.header 升起互助旗後可以修改嗎？
        p 當然可以！只需再次登入平台，點選「我的旗幟」，即可隨時修改您的互助旗內容，保持信息的最新和準確。
        h2.ui.header 升起互助旗後可以下載備份嗎？
        p 當然可以！只需再次登入平台，點選「隱私權政策」，點擊下方「下載備份」按鈕，即可下載您的資料備份
        p
          router-link(to="privacy-policy") 前往隱私權政策
            i.chevron.right.icon

        h2.ui.header 升起互助旗後可以移除嗎？
        p 可以，您只在「我的旗幟」頁面點選「刪除旗幟」來刪除旗幟並退出自學2.0的服務。
      .ui.padded.segment.column
        img(src="../assets/map1.webp")
        h2.ui.header 地圖介面有什麼用意？
        p 地圖介面讓您能夠根據地理位置就近尋找夥伴。例如，您可以查看「宜蘭附近有沒有自學朋友呢？」透過地圖，您可以一目了然地找到附近的學習夥伴，增進彼此的互動和交流。

        p
          router-link(to="/maps") 前往地圖介面
            i.chevron.right.icon

        //h2.ui.header 自學場地功能的概念？

        //p 自學場地登錄功能，讓使用者不只可以登錄個人，也可以登錄額外的「自學場地」，包含各種開放空間、非學校型態團體或機構資訊均可登錄。

        //p 填寫必填的地名和地址，並手動調整地圖標記以確定準確位置。提供有效的聯絡方式和簡短的介紹，並可選擇填寫網站網址。這個功能確保場地資訊清晰且易於他人找到，幫助自學者更方便地找到合適的學習場所。

        //p 您需要先登入，才能插場地旗。


        h2.ui.header 名簿是什麼？
        p
          b 名簿
          | 是方便管理和查找特定朋友的功能，類似捷徑或釘選。使用者可以建立自己的名簿，方便下次查找特定的朋友。

        h2.ui.header 自學2.0中社團概念為何？

        p 
          b 社團
          | 功能類似資源庫，使用者可創建社團，添加簡介，分享學習資源，留言聊天。這有助於根據主題收集和分享有用資訊，促進成員間的協作和互動。

        p
          router-link(to="/groups") 前往社團介面
            i.chevron.right.icon

        h2.ui.header 自學2.0中群聊概念為何？
        p
          b 群聊
          | 功能提供即時交流平台，使用者可分享訊息、討論話題，支持標籤分類與訊息搜尋，方便管理。

        p
          b 群聊
          | 位於視窗的
          b 右下角
          | ，點擊即可放大查看，登入後可參與群聊，提升互動。

        h2.ui.header 如何提出錯誤回報或功能請求？
        p
          b 自學2.0
          | 有位於Github的專案議題區。請上Github的專案議題區提出錯誤回報與功能請求，謝謝。若您還沒有Github帳號，請先註冊一個Github帳號再留言。

        p Note: 若您單純是要登入自學2.0，而非提出議題，並不需要一個Github帳號。

        p
          a(href="https://github.com/3dw/auto20-next/issues") 前往專案議題區
            i.chevron.right.icon


        h2.ui.header Github平台是什麼？
        p
          | 如果有70個人要協作一份重要文件，每個人都有不同的想法但都希望文件更好，可以把他們分成七組，每組10人。每組使用便利貼、布告板等工具集思廣益。然而，整合所有小組意見時，會發現每組都有優缺點，難以完全整合。使用Google Docs協作，當人數多時，單一版本控制常常不夠用。若只有兩三人，可以保留所有不同意見並整合到新版本。GitHub 提供一種更強大的協作平台，基於Git版本控制系統，有效解決這些問題。

        p
          a(href="https://github.com/3dw/github-tutorial/blob/main/README.md") 前往Github入門介紹
            i.chevron.right.icon


</template>

<style type="text/css" scoped>
  h2, p {
    text-align: left;
  }

  p {
    font-size: 16px;
  }

  img {
    border-radius: 50%;
  }
</style>
