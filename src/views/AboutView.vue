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
        h2.ui.header {{$t('about.auto20_by')}}
        p {{$t('about.auto20_by_content1')}}
          a(href="http://www.alearn.org.tw", target="_blank") {{$t('about.auto20_by_content2')}}
          | {{$t('about.auto20_by_content3')}}
        h2.ui.header {{$t('about.card_flag')}}
        p 
          b {{$t('about.card_name')}}
          | {{$t('about.card_content1')}}
        p {{$t('about.flag_content1')}}
        p 
          | {{$t('about.card_content2')}}
        p 
          | {{$t('about.qrcode_content1')}}
        p
          router-link(to="/profile") {{$t('about.raise_flag')}}
          i.chevron.right.icon
        h2.ui.header {{$t('about.card_flag_tip')}}
        p
          | {{ $t('about.card_flag_tip_content')}}
        
        h2.ui.header {{$t('about.flag_update1')}}
        p {{$t('about.flag_update_content')}}
        h2.ui.header {{$t('about.flag_content2')}}
        p {{$t('about.flag_content3')}}
          router-link(to="privacy-policy") {{$t('login.pr')}}
            i.chevron.right.icon
          |{{$t('about.flag_content4')}}
        h2.ui.header {{$t('about.flag_update2')}}
        p {{$t('about.flag_content5')}}
        h2.ui.header {{$t('about.flag_download')}}
        p {{$t('about.flag_content6')}}
        p
          router-link(to="privacy-policy") {{$t('about.pr_go')}}
            i.chevron.right.icon

        h2.ui.header {{$t('about.flag_remove')}}
        p {{$t('about.flag_content7')}}
      .ui.padded.segment.column
        img(src="../assets/map1.webp")
        h2.ui.header {{$t('about.map_is')}}
        p {{$t('about.map_content1')}}

        p
          router-link(to="/maps") {{$t('about.map_go')}}
            i.chevron.right.icon

        //h2.ui.header 自學場地功能的概念？

        //p 自學場地登錄功能，讓使用者不只可以登錄個人，也可以登錄額外的「自學場地」，包含各種開放空間、非學校型態團體或機構資訊均可登錄。

        //p 填寫必填的地名和地址，並手動調整地圖標記以確定準確位置。提供有效的聯絡方式和簡短的介紹，並可選擇填寫網站網址。這個功能確保場地資訊清晰且易於他人找到，幫助自學者更方便地找到合適的學習場所。

        //p 您需要先登入，才能插場地旗。


        h2.ui.header {{$t('about.directory_is')}}
        p
          b {{ $t('login.bk') }}
          | {{ $t('about.directory_content1') }}

        h2.ui.header {{$t('about.group_is')}}

        p 
          b {{$t('login.gp')}}
          | {{ $t('about.group_content1') }}

        p
          router-link(to="/groups") {{$t('about.group_go')}}
            i.chevron.right.icon

        //h2.ui.header 自學2.0中群聊概念為何？
        //p
          b 群聊
          | 功能提供即時交流平台，使用者可分享訊息、討論話題，支持標籤分類與訊息搜尋，方便管理。

        //p
          b 群聊
          | 位於視窗的
          b 右下角
          | ，點擊即可放大查看，登入後可參與群聊，提升互動。

        h2.ui.header {{$t('about.bugreport_is')}}
        p
          b {{$t('about.auto20')}}
          | {{ $t('about.bugreport_content1') }}

        p {{$t('about.bugreport_content2')}}

        p
          a(href="https://github.com/3dw/auto20-next/issues") {{$t('about.bugreport_go')}}
            i.chevron.right.icon


        h2.ui.header {{$t('about.github_is')}}
        p
          | {{ $t('about.github_content1') }}

        p
          a(href="https://github.com/3dw/github-tutorial/blob/main/README.md") {{ $t('about.github_go') }}
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
