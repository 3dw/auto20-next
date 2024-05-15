<template lang="pug">
nav.ui.menu
  button.no-border.ui.item(@click="toggleSidebar")
    i.icon.bars
  router-link.item(to="/")
    i.home.icon
    | 首頁
  router-link.item.fat-only(to="/about")
    i.info.icon
    | 說明
  router-link.item(to="/friends")
    i.users.icon
    | 朋友
  router-link.item.fat-only(to="/groups")
    i.globe.icon
    | 社團
  router-link.item.fat-only(to="/maps")
    i.map.icon
    | 地圖

  //router-link.item.phone-only(to="/profile")
    i.user.icon
    | 我的
  //button.no-border.ui.item.phone-only(v-if="uid", @click="logout") logout
  //.fat-only
  div.right.menu
    router-link.item(to="/profile")
      i.user.icon
      | 我的
    button.no-border.ui.item(v-if="uid", @click="logout") 登出
.ui.sidebar.vertical.menu(:class="{'hidden': !sidebarVisible}")

  router-link.item(to="/")
    i.home.icon.no-float
    | 首頁
  router-link.item(to="/about")
    i.info.icon.no-float
    | 說明
  router-link.item(to="/privacy-policy")
    i.save.icon.no-float
    | 隱私權政策
  router-link.item(to="/friends")
    i.users.icon.no-float
    | 朋友
  router-link.item(to="/groups")
    i.globe.icon.no-float
    | 社團
  router-link.item(to="/maps")
    i.map.icon.no-float
    | 地圖
  router-link.item(to="/profile")
    i.user.icon.no-float
    | 我的
  router-link.item(to="/book")
    i.book.icon.no-float
    | 名簿
.ui.sidebar.bg.phone-only(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")

router-view(:isInApp="isInApp", :zoom="zoom", :uid="uid", :users="users", :book="book", :center="center", :places="places", :user="user", :email="email", :photoURL="photoURL", @loginGoogle="loginGoogle", @addBook="addBook", @removeBook="removeBook", @locate="locate", 
  @getUserLocation="getUserLocation")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
import { set, ref, onValue } from 'firebase/database'; // 從firebase/database導入onValue函式用於資料即時讀取
import { app, usersRef, placesRef, groupsRef, booksRef, db } from './firebase'; // 導入Firebase相關配置和參考
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // 從firebase/auth導入身份驗證功能


const inApp = new InApp(window.navigator.userAgent); // 創建InApp實例以檢測應用內瀏覽情況

const auth = getAuth(app); // 獲取Firebase身份驗證實例

const provider = new GoogleAuthProvider(); // 創建Google認證提供者
provider.addScope('https://www.googleapis.com/auth/userinfo.email'); // 要求Google提供者的電子郵件存取權限


export default defineComponent({
  name: 'WeLearn', // 定義組件名稱
  data () {
    return {
      zoom: 7,
      center: [22.613220, 121.219482],
      sidebarVisible: false, // 定義側邊欄可見狀態
      // eslint-disable-next-line
      users: null as any, // 定義用戶資料變量
      book: [] as string[], // 定義名簿資料變量 
      // eslint-disable-next-line
      user: null as any, // 定義當前用戶變量
      email: null as string | null, // 定義電子郵件變量
      uid: '' as string, // 定義用戶ID變量
      photoURL: null as string | null, // 定義用戶頭像URL變量
      isInApp: inApp.isInApp, // 檢測是否在應用內部
      groups: null as [string] | null, // 定義社團資料變量
      places: null as [string] | null, // 定義地點資料變量
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
    onValue(placesRef, (snapshot) => {
      const data = snapshot.val(); // 讀取地點資料
      vm.places = data; // 更新地點資料狀態
    });
    onValue(groupsRef, (snapshot) => {
      const data = snapshot.val(); // 讀取社團資料
      vm.groups = data; // 更新社團資料狀態
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
    },
    center(newVal, oldVal) {
      console.log('Center updated from', oldVal, 'to', newVal);
      // 可以在這裡進一步確認子組件是否應該被更新
    },
  },
  methods: {
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
      if (this.book.indexOf(uid) === -1) {
        this.book.push(uid)
        set(ref(db, 'books/' + this.uid), this.book)
        // this.setLocal('book')
      }
    },
    removeBook: function (index:number) {
      if (window.prompt('確定要將這位朋友移出您的名簿嗎？')) {
        this.book.splice(index, 1)
        set(ref(db, 'books/' + this.uid), this.book)
      }
      // this.setLocal('book')
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
    loginGoogle: function () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this; // 儲存當前Vue實例
      if (this.isInApp) {
        window.alert('本系統不支援facebook, link等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝'); // 提示不支援應用內登入
      } else {
        signInWithPopup(auth, provider).then((result) => {
          const user = result.user; // 獲取登入後的用戶資訊
          vm.user = user; // 更新用戶狀態
          vm.email = user.providerData[0].email; // 更新電子郵件狀態
          vm.uid = user.uid; // 更新用戶ID
          if (user.photoURL) {
            vm.photoURL = decodeURI(user.photoURL); // 解碼並更新用戶頭像URL
          } else {
            vm.photoURL = null; // 設置用戶頭像URL為空
          }
          if (vm.uid && vm.users[vm.uid]) {
            vm.user = vm.users[vm.uid]; // 更新用戶資訊
            onValue(booksRef, (snapshot) => {
              const data = snapshot.val() || {}; // 讀取社團資料
              vm.book = data[vm.uid]; // 更新名簿資料狀態
            });
          }
          if (vm.uid && vm.users[vm.uid] && vm.users[vm.uid].latlngColumn ) {
            this.locate(vm.users[vm.uid], false)
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
  top: 40px;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  opacity: 1;
  visibility: visible !important;
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


</style>
