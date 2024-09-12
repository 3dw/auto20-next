<template lang="pug">
  .hello
    //- h1.ui.header
    //-   img(src="../assets/handshake1.webp", alt="互助互惠")
    //-   | {{ $t('about.intro') }}
    //-   img(src="../assets/handshake1.webp", alt="互助互惠")
  
    .ui.grid.container
      .ui.two.column.stackable.row
        .ui.padded.segment.column
          img#about-main(src="../assets/handshake1.webp")
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
            | {{ $t('about.github_content') }}
  
          p
            a(href="https://github.com/3dw/github-tutorial/blob/main/README.md") {{ $t('about.github_go') }}
              i.chevron.right.icon
  </template>
  
  <style scoped>
  h1.ui.header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    background-color: #f5f5f5;
    padding: 1em;
    border-radius: 8px;
  }
  
  h2.ui.header {
    color: #333;
    font-size: 1.5em;
    margin-top: 1.5em;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
    color: #555;
    text-align: left;
  }
  
  a {
    color: #0056b3;
    text-decoration: none;
  }
  
  a:hover {
    color: #003d80;
    text-decoration: underline;
  }
  
  .ui.grid.container {
    background-color: #ffffff;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .ui.padded.segment.column {
    background-color: #f9f9f9;
    padding: 2em;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5em;
  }
  
  .ui.grid.container .ui.padded.segment.column img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 1em;
  }
  .ui.grid.container .ui.padded.segment.column img {
  max-width: 100%;
  width: auto; /* 統一寬度 */
  height: 300px; /* 根據寬度自動調整高度 */
  border-radius: 8px;
  margin-bottom: 1em;
  object-fit: cover; /* 使圖片以填滿的方式顯示，避免變形 */
}

  
  .ui.divider {
    margin: 2em 0;
  }
  
  

  @media (max-width: 768px) {
    .ui.grid.container {
      padding: 1em;
    }
    .ui.padded.segment.column {
      padding: 1em;
    }
  }
  </style>
  