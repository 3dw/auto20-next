
nav.ui.menu#main-menu
  button.no-border.ui.item(@click="toggleSidebar")
    i.icon.bars
  router-link.item.fat-only(to="/")
    i.home.icon
    span {{ $t('login.hp') }}
  router-link.item(to="/about")
    i.info.icon
    | {{ $t('login.ab') }}
  router-link.item(to="/maps")
    i.map.icon
    | {{ $t('login.mp') }}
  router-link.item.fat-only(to="/friends")
    i.users.icon
    | {{ $t('login.fr') }}
  router-link.item.fat-only(to="/groups")
    i.object.group.outline.icon
    | {{ $t('login.gp') }}
  // router-link.item.fat-only(to="/polis")
    i.comments.icon
    | 論譠

  div.right.menu
    // .ui.simple.dropdown.item
      i.share.square.icon
      .menu
      button.no-border.item(@click="copyLink()") 複製當前網址
    //button(@click="changeZh") 中文Chinese
    //button(@click="changeEn") 英文English

    .ui.simple.dropdown.item
      i.globe.icon
      span.fat-only
        | 語言 Language
      .menu
        button.no-border.ui.item(@click="changeZh")
          | 中文 Chinese

        button.no-border.ui.item(@click="changeEn")
          | 英文 English
    
    .ui.simple.dropdown.item
      img.ui.avatar.image(v-if="photoURL" :src="photoURL")
      i.user.icon(v-else)
      .menu
        router-link.item(to="/profile")
          i.flag.icon
          | {{ $t('login.fg') }}

        .ui.divider(v-show="myGroupIdx().length > 0")

        router-link.item(v-for="i in myGroupIdx()", :key="i", :to="'/group/' + i") {{ groups[i].n }}

        router-link.item(to="/book", v-if="uid")
          i.book.icon.no-float
          | {{ $t('login.bk')}}
          
        button.no-border.ui.item(v-if="uid", @click="logout")
          i.sign-out.icon
          | {{ $t('login.logout')}}
carousel(:wrapAround="true", :items-to-show="1", :autoplay="4000", :transition="4000", :pauseAutoplayOnHover="true")
  slide(v-for="slide in news", :key="slide")
    span {{ $t('news.' + slide) }}
  template(#addons)
    // navigation
    // pagination

.ui.sidebar.vertical.menu#side-menu(:class="{'hidden': !sidebarVisible}")
  router-link.item(to="/")
    i.home.icon.no-float
    | {{ $t('login.hp') }}
  router-link.item(to="/about")
    i.info.icon.no-float
    | {{ $t('login.ab') }}
  router-link.item(to="/privacy-policy")
    i.save.icon.no-float
    | {{ $t('login.pr') }}
  router-link.item(to="/friends")
    i.users.icon.no-float
    | {{ $t('login.fr') }}
  router-link.item(to="/maps")
    i.map.icon.no-float
    | {{ $t('login.mp') }}
  router-link.item(to="/polis")
    i.comments.icon.no-float
    | {{ $t('login.polis') }}
  router-link.item(to="/groups")
    i.object.group.outline.icon.no-float
    | {{ $t('login.gp') }}
  // router-link.item(to="/polis")
    i.comments.icon.no-float
    | 論譠
  router-link.item(to="/profile")
    i.user.icon.no-float
    | {{ $t('login.fg') }}
  // router-link.item(to="/my_place", v-if="uid")
    i.marker.icon.no-float
    | 自學場地登錄
  router-link.item(to="/book", v-if="uid")
    i.book.icon.no-float
    | {{ $t('login.bk')}}
  router-link.item(to="/link")
    i.globe.icon.no-float
    | {{ $t('login.link') }}

.ui.sidebar.bg(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")
br

.ui.form.container(v-if="doSearch($route.path)", v-show="uid")
  .search-input
    input(v-autofocus="", v-model="mySearch", placeholder="關鍵字搜尋", autofocus)
    i.search.icon

br

router-view(:isInApp="isInApp", :zoom="zoom", :uid="uid", :users="users", :book="book", :center="center", :places="places", :user="user", :mySearch="mySearch", :email="email", :photoURL="photoURL", @loginGoogle="loginGoogle", @addBook="addBook", @removeBook="removeBook", @locate="locate", @getUserLocation="getUserLocation", @logout="logout")

br
br

chatbox#ch(@loginGoogle="loginGoogle", :uid="uid", :user="user", :photoURL="photoURL")















































































































































































































































































#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  /* Media Query for devices wider than 768px */
  @media (min-width: 769px) {
    .phone-only {
      display: none !important; /* 在較大螢幕上隱藏 */
    }
  }
  
  @media (max-width: 770px) {
    .fat-only {
      display: none !important;
    }
  }
  
  .ui.menu, .ui.sidebar.vertical.menu {
    background-color: #ffffff; /* 白色背景 */
    border: 1px solid #d1d5db; /* 灰色邊框 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 淺色陰影 */
  }
  
  .ui.menu a.item, .ui.sidebar.vertical.menu a.item {
    color: #2c3e50; /* 深色文字 */
    font-weight: bold;
    padding: 10px 15px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .ui.menu a.item:hover, .ui.sidebar.vertical.menu a.item:hover {
    background-color: #e2e8f0; /* 懸停時淺灰色背景 */
    color: #0056b3; /* 懸停時深藍色文字 */
  }
  
  .ui.menu a.item.active, .ui.sidebar.vertical.menu a.item.active {
    background-color: #0056b3; /* 活動項目深藍色背景 */
    color: #ffffff; /* 活動項目白色文字 */
  }
  
  button.no-border {
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .ui.avatar.image {
    width: 28px; /* 調整圖片寬度 */
    height: 28px; /* 調整圖片高度 */
    border-radius: 50%; /* 圓形圖片 */
  }
  
  .left.aligned {
    text-align: left;
    margin-left: .6em;
  }
  
  .ui.sidebar {
    z-index: 99999 !important;
  }
  
  .ui.sidebar.bg {
    z-index: 2 !important; /* 設定一個低值 */
    background-color: rgba(180, 180, 180, 0.62); /* 確保有背景色 */
    width: 100vw;
    cursor: pointer;
  }
  
  .ui.sidebar.hidden {
    opacity: 0;
    visibility: hidden;
    transition: all 0s linear !important;
    transform: translateX(-100%); /* 隱藏時向左滑動 */
  }
  
  .search-input {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .search-input input {
    width: 100%;
    padding-right: 30px; /* 確保圖示不會覆蓋到文字 */
  }
  
  .search-input .search.icon {
    position: absolute;
    right: 10px;
    top: 9px;
    color: #888;
  }
  
  .carousel {
    padding: .6em;
    background-color: #f39c04;
    font-weight: bold;
    font-size: 16px;
  }
  
  .carousel_item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  
  #ch {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 9999;
  }
  
  .red.note {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    top: -10px;
    font-size: 16px;
    padding: .4em !important;
    border-radius: 50%;
    background-color: red;
  }
  
  .invisible {
    color: transparent !important;
  }
  
  .highlightedText {
    background-color: yellow;
  }
  