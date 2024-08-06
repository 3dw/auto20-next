<template lang="pug">
  nav.ui.menu#main-menu
    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars
    router-link.item.fat-only(to="/")
      i.home.icon
      span {{ $t('login.hp') }}
    router-link.item(to="/about")
      i.info.icon
      span.fat-only
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
            // Notification Icon with Badge
      .item
        .ui.icon.button(@click="goToNotifications")
          i.bell.icon
            .ui.red.small.label(v-if="unreadCount > 0") {{ unreadCount }}
   
      .ui.simple.dropdown.item
        img.ui.avatar.image(v-if="photoURL" :src="photoURL")
        i.user.icon(v-else)
        .menu
          router-link.item(to="/profile")
            i.flag.icon
            | {{ $t('login.fg') }}
  
          .ui.divider(v-show = "myGroupIdx().length > 0")
  
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
      i.object.group.outlin.icon.no-float
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
    router-link.item(to="/source_github")
      i.github.icon.no-float
      | {{ $t('login.source_github') }}
  
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
  
  chatbox#ch(@loginGoogle = "loginGoogle", :uid = "uid", :user="user", :photoURL="photoURL")
  
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
  import { get, set, push, ref, onValue, onChildAdded, onChildChanged} from 'firebase/database'; // 從firebase/database導入onValue函式用於資料即時讀取
  import { app, usersRef, placesRef, groupsRef, booksRef, db } from './firebase'; // 導入Firebase相關配置和參考
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // 從firebase/auth導入身份驗證功能
  
  
  import Chatbox from './components/Chatbox.vue';
  
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  
  // 1. 擴展 isInApp 的偵測邏輯
  const inApp = new InApp(window.navigator.userAgent);
  // 初始假設為 InApp 庫的偵測結果
  let actualInApp = inApp.isInApp;
  
  // 2. 加入額外的條件來修正誤判情況
  // 檢查 userAgent 是否包含特定的 Android 瀏覽器標誌
  if (/Android/.test(window.navigator.userAgent) && /Chrome|Google/.test(window.navigator.userAgent)) {
    actualInApp = false;
  }
  
  const auth = getAuth(app); // 獲取Firebase身份驗證實例
  
  const provider = new GoogleAuthProvider(); // 創建Google認證提供者
  
  provider.addScope('profile');
  provider.addScope('email');
  provider.addScope('https://www.googleapis.com/auth/userinfo.email'); // 要求Google提供者的電子郵件存取權限
  
  
  export default defineComponent({
    name: 'WeLearn', // 定義組件名稱,
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
      Chatbox
    },
    data () {
      return {
        mySearch: '',
        news: [
          'upgrading',
          'flag',
          'remove',
          // 'report'
        ],
        zoom: 7,
        center: [23.5330, 121.0654],
        sidebarVisible: false, // 定義側邊欄可見狀態
        // eslint-disable-next-line
        users: null as any, // 定義用戶資料變量
        book: [] as string[], // 定義個人名簿資料變量 
        // eslint-disable-next-line
        books: [] as any[], // 定義所有名簿資料變量 
        // eslint-disable-next-line
        user: null as any, // 定義當前用戶變量
        email: null as string | null, // 定義電子郵件變量
        uid: '' as string, // 定義用戶ID變量
        photoURL: null as string | null, // 定義用戶頭像URL變量
        // 使用修正後的 actualInApp
        isInApp: actualInApp, // 檢測是否在應用內部
        // eslint-disable-next-line
        groups: null as [any] | null, // 定義社團資料變量
        places: null as [string] | null, // 定義地點資料變量
        groups_for_notifications: null as [any] | null, 
        group_for_no: null as [any] | null, 
        idx_for_no: null as [any] | null, // 定義社團資料變量
        notifications: [] as any[],
        unreadCount: 0,
      }
    },
    mounted () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this; // 儲存當前Vue實例
      console.log(vm.isInApp); // 輸出是否在應用內部的狀態
      onValue(usersRef, (snapshot) => {
        const data = snapshot.val(); // 讀取用戶資料
        vm.users = data; // 更新用戶資料狀態
      });
      /* onValue(placesRef, (snapshot) => {
        const data = snapshot.val(); // 讀取地點資料
        vm.places = data; // 更新地點資料狀態
      }); */
      
      onValue(groupsRef, (snapshot) => {
        const data = snapshot.val(); // 讀取社團資料
        vm.groups = data; // 更新社團資料狀態
        // vm.setupGroupListeners(); // 設置監聽器
      });
      
      onValue(ref(db, 'users/' + this.uid + '/notifications'), (snapshot) => {
      const data = snapshot.val() || [];
      vm.notifications = data;
      vm.unreadCount = data.filter(n => !n.isRead).length;
      });
      
      onValue(booksRef, (snapshot) => {
        console.log('get books')
        const data = snapshot.val() || {}; // 讀取社團資料
        vm.books = data; // 更新名簿資料狀態
      });
      
  
      /* if (localStorage.getItem('book')) {
        console.log(localStorage.getItem('book'))
        this.book = JSON.parse(localStorage.getItem('book') || '') // 讀取名簿資料變量 ;
      } */
    },
    watch: {
      $route (to, from) {
        console.log(from.path); // 輸出路由變更前的路徑
        console.log(to.path); // 輸出路由變更後的路徑
        window.scrollTo(0, 0); // 每次路由變更時回到頂部
        this.sidebarVisible = false; //收回側欄
      },
      center(newVal, oldVal) {
        console.log('Center updated from', oldVal, 'to', newVal);
        // 可以在這裡進一步確認子組件是否應該被更新
      },
      uid(newUid) {
        if (newUid) {
          this.book = this.books[newUid]
          console.log(this.book)
          // 使用 nextTick 確保子組件接收到最新的 props
          this.$nextTick(() => {
            console.log('Book updated and propagated to children');
          });
        }
      }
    },
    methods: {
      
      /* setupGroupListeners() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        console.log('setupGroupListeners');
        console.log('groups', vm.groups);
        if (!vm.groups) return;
        let notificationSent = false; // 初始化標誌
        vm.groups.forEach((group_for_no, idx_for_no) => {
          if (!group_for_no.members || !group_for_no.members.includes(vm.uid)) return;
          const groupChatsRef = ref(db, 'groups/' + idx_for_no + '/chats');
              //const chatsRef = ref(db, 'groups/0' + '/chats');
          console.log('chatsRef路徑', 'groups/' + idx_for_no + '/chats');

          

          onChildAdded(ref(groupChatsRef), (snapshot) => {
            if (notificationSent) return; // 如果已經發送通知，直接返回
            console.log('有新訊息', 'groups/' + idx_for_no + '/chats');
            const newChat = snapshot.val();
            console.log(newChat)
            vm.addNotification('New messagedef in group ' + group_for_no.n, '/groups/' + idx_for_no);
            notificationSent = true; // 設置標誌為 true
          });
          if (notificationSent) {
            return; // 跳出迴圈
          } 
           
        });
        if (notificationSent) {
            return; // 跳出迴圈
        }
      },*/
      addNotification(text, route) {
        const notification = {
          time: new Date().toISOString(),
          from: 'systemdef',
          text,
          route,
          isRead: false
        };
        //const userNotificationsRef = ref(db, 'users/' + this.uid + '/notifications');
        //set(userNotificationsRef, [...this.notifications, notification]).then(() => {
        //  console.log('notification created');
        //});
        const userNotificationsRef = ref(db, 'users/' + this.uid + '/notifications');
        push(userNotificationsRef, notification).then(() => {
          console.log('notification created');
        }).catch((error) => {
          console.error('Error creating notification:', error);
        });
      },
      goToNotifications() {
        this.$router.push('/notifications');
      },

      doSearch: function (p) {
        return !(p.match(/(^\/$|myPlace|polis|qr|outer|flag|myFlag|group\/|place|profile|about|privacy-policy|faq|flag\/\d+|ans\/\d+)/))
      },
      myGroupIdx () {
        return (this.groups || []).filter((g) => {
          return (g.members || []).indexOf(this.uid || '') > -1
        }).map(function (g) {
          return g.idx
        })
      },
      changeZh() {
        this.$i18n.locale = 'zh';
        localStorage.setItem('lang', 'zh');
      },
  
      changeEn() {
        this.$i18n.locale = 'en';
        localStorage.setItem('lang', 'en');
      },
      // eslint-disable-next-line
      locate: function (h:any, gotoMap: boolean) {
        this.zoom = 13
        this.center = h.latlngColumn.split(',')
        console.log("Updated location:", this.center);
        // 使用 nextTick 確保子組件接收到最新的 props
        this.$nextTick(() => {
          console.log('Center updated and propagated to children');
        });
        if (gotoMap) {
          this.$router.push({path: '/maps'})
        }
      },
      getUserLocation: function () {
        console.log('try getUserLocation');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // 這裡確保整個賦值是一次性的，以維持反應性
              this.center = [position.coords.latitude, position.coords.longitude];
              console.log("Updated location:", this.center);
              // 使用 nextTick 確保子組件接收到最新的 props
              this.$nextTick(() => {
                console.log('Center updated and propagated to children');
              });
            },
            (error) => {
              console.error("Error getting location:", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      },
      toggleSidebar() {
        console.log('toggleSidebar'); // 輸出切換側邊欄操作
        this.sidebarVisible = !this.sidebarVisible; // 切換側邊欄的可見性
      },
      setLocal: function (n:string) {
        console.log('set:' + n)
        if (n == 'book') {
          localStorage.setItem(n, JSON.stringify(this.book))
        }
        // console.log(this.$localStorage.get(n))
      },
      addBook: function (uid:string) {
        this.book = this.book || []
        if (this.book.indexOf(uid) === -1) {
          this.book.push(uid)
          set(ref(db, 'books/' + this.uid), this.book)
          // this.setLocal('book')
        }
      },
      removeBook: function (index:number) {
        if (window.confirm('確定要將這位朋友移出您的名簿嗎？')) {
          this.book.splice(index, 1)
          set(ref(db, 'books/' + this.uid), this.book)
        }
        // this.setLocal('book')
      },
      copyLink () {
        if (!document.hasFocus()) {
          alert("Document does not have focus, cannot copy link.");
          return;
        }
        console.log(this.$route);
        const copyText = 'https://we.alearn.org.tw/#' + this.$route.path;
        navigator.clipboard.writeText(copyText)
          .then(() => {
            window.alert("已複製當前網址: " + copyText);
          })
          .catch(err => {
            console.error('無法複製當前網址: ', err);
          });
        this.$forceUpdate();
      },
      logout () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this; // 儲存當前Vue實例
        auth.signOut().then(function() {
          vm.user = null; // 清除用戶資料
          vm.uid = ''; // 清除用戶ID
          vm.photoURL = ''; // 清除用戶頭像URL
          console.log(vm.$router); // 輸出路由實例
          vm.$router.push('/'); // 導航回首頁
        });
      },
      loginGoogle: function (autoredirect) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        if (this.isInApp) {
          window.alert('本系統不支援Facebook, Line等App內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝');
        } else {
          signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            vm.user = user;
            vm.email = user.providerData[0].email;
            vm.uid = user.uid;

            console.log(vm.uid);
            vm.photoURL = user.photoURL ? decodeURI(user.photoURL) : "https://we.alearn.org.tw/logo-new.png";

            if (vm.uid && vm.users && vm.users[vm.uid]) {
              vm.user = vm.users[vm.uid];
              if (vm.uid && vm.users[vm.uid] && vm.users[vm.uid].latlngColumn) {
                this.locate(vm.users[vm.uid], false);
              }
            } else {
              // 用GET的方法，用usersRef一次性取得users的資料，再加上.then
              get(usersRef).then((snapshot) => {
                const data = snapshot.val();
                vm.users = data; // 更新用戶資料狀態
                vm.user = vm.users[vm.uid];
                if (vm.uid && vm.users[vm.uid] && vm.users[vm.uid].latlngColumn) {
                  this.locate(vm.users[vm.uid], false);
                }
              }).catch((error) => {
                console.error("Error fetching users:", error);
              });
            }
            if (autoredirect) {
              // 強制重定向的個人頁
              vm.$router.push('/profile');
            }
          }).catch((error) => {
            console.error("Login error:", error);
            if (error.message.includes('sessionStorage')) {
              window.alert('瀏覽器不支持sessionStorage，請檢查瀏覽器設置或更換瀏覽器再試一次。');
            }
          });
        }
      }
    }
  });
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .ui.menu .item .icon.bell {
  position: relative;
  }
  
  .ui.menu .item .ui.red.small.label {
  position: absolute;
  top: -10px;
  right: 0;
  padding: 0.4em;
  border-radius: 50%;
  background-color: red;
  color: white;
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
  
  .ui.menu a.item {
    font-weight: bold;
    color: #2c3e50;
  }
  
  a.router-link-exact-active {
    background-color: #42b983 !important;
  }
  
  button.no-border {
    border: none;
  }
  
  .no-float {
    float: none !important;
    margin: .6em .6em !important;
  }
  
 /* CSS */
.ui.sidebar {
transition: transform .3s ease, opacity .3s ease, visibility .3s ease !important;
z-index: 1000;
position: fixed;
top: 0;
left: 0;
width: 300px;
height: 100%;
background-color: #f5f5f5; /* 更改背景色 */
box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
opacity: 1;
visibility: visible !important;
padding: 20px; /* 增加內邊距 */
}

.ui.sidebar.bg {
z-index: 2 !important; /* 設定一個低值 */
background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
width: 100vw;
cursor: pointer;
}

.ui.sidebar.hidden {
opacity: 0;
visibility: hidden;
transition: all 0s linear !important;
transform: translateX(-100%); /* 隱藏時向左滑動 */
}

.ui.avatar.image {
width: 40px; /* 調整圖片寬度 */
height: 40px; /* 調整圖片高度 */
border-radius: 50%; /* 圓形圖片 */
border: 2px solid #e9ecef; /* 添加邊框 */
}

.left.aligned {
text-align: left;
margin-left: .6em;
}

.ui.sidebar {
z-index: 99999 !important;
}

nav.ui.menu, .ui.sidebar.vertical.menu {
background-color: #ffffff; /* 白色背景 */
border-bottom: 1px solid #dee2e6; /* 添加底部邊框 */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
margin-bottom: 0;
}

nav.ui.menu a.item, .ui.sidebar.vertical.menu a.item {
color: #495057; /* 深色文字 */
font-weight: bold;
padding: 15px 20px; /* 調整內邊距 */
text-decoration: none;
transition: background-color 0.3s ease, color 0.3s ease;
display: flex;
align-items: center; /* 垂直對齊圖標和文字 */
}

nav.ui.menu a.item:hover, .ui.sidebar.vertical.menu a.item:hover {
background-color: #e2e6ea; /* 懸停時淺灰色背景 */
color: #0056b3; /* 懸停時深藍色文字 */
}

nav.ui.menu a.item.active, .ui.sidebar.vertical.menu a.item.active {
background-color: #0056b3; /* 活動項目深藍色背景 */
color: #ffffff; /* 活動項目白色文字 */
}

button.no-border {
border: none;
background: none;
cursor: pointer;
}

.carousel {
padding: 1em;
background-color: #ffc107; /* 黃色背景 */
font-weight: bold;
font-size: 16px;
border-radius: 8px; /* 圓角 */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
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

.search-input {
position: relative;
display: flex;
align-items: center;
border: 1px solid #ced4da; /* 添加邊框 */
border-radius: 4px; /* 圓角 */
padding: 5px 10px; /* 增加內邊距 */
background-color: #ffffff; /* 白色背景 */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* 添加陰影效果 */
}

.search-input input {
width: 100%;
border: none;
padding-right: 30px; /* 確保圖示不會覆蓋到文字 */
}

.search-input .search.icon {
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
color: #888;
}

  </style>
  