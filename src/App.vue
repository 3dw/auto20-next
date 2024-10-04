<template lang="pug">
  nav.ui.menu#main-menu.no-print
    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars
    router-link.item.fat-only(to="/")
      i.home.icon
      span {{ $t('login.hp') }}
    router-link.item(to="/about", :class="{'fat-only': uid}")
      i.info.icon
      span.fat-only
        | {{ $t('login.ab') }}
    router-link.item(to="/maps", :class="{'fat-only': uid}")
      i.map.icon
      | {{ $t('login.mp') }}
    router-link.item(to="/friends", :class="{'fat-only': !uid}")
      i.users.icon
      | {{ $t('login.fr') }}
    router-link.item(to="/groups", :class="{'fat-only': !uid}")
      // img.abs-upper-right(src="./assets/new-yellow.png")      
      i.object.group.outline.icon
      span.fat-only {{ $t('login.gp') }}
    
    div.right.menu
      .ui.simple.dropdown.item
        i.globe.icon
        span.fat-only
          | 語言 Language
        .menu
          button.no-border.ui.item(@click="changeZh")
            | 中文 Chinese
          button.no-border.ui.item(@click="changeEn")
            | 英文 English
      button.ui.item.no-border(v-show="uid", @click="goToNotifications")
        i.bell.icon
          .ui.red.small.label(v-if="unreadCount > 0") {{ unreadCount }}
      .ui.simple.dropdown.item
        img.ui.avatar.image(v-if="photoURL" :src="photoURL" alt="User Avatar" @error="useDefaultAvatar" @load="onImageLoad")
        i.user.icon(v-else)
        .menu
          router-link.item(v-if="uid", to="/profile")
            i.flag.icon
            | {{ $t('login.fg') }}
          button.no-border.item(v-else, @click="toggleLogin")
            | {{ $t('login.login' )}}
          .ui.divider(v-show = "myGroupIdx().length > 0")
          router-link.item(v-for="i in myGroupIdx()", :key="i", :to="'/group/' + i") {{ groups[i].n }}
          router-link.item(to="/book", v-if="uid")
            i.book.icon.no-float
            | {{ $t('login.bk')}}
          button.no-border.ui.item(v-if="uid", @click="logout")
            i.sign-out.icon
            | {{ $t('login.logout')}}
  carousel.no-print(:wrapAround="true", :items-to-show="1", :autoplay="3500", :transition="4000", :pauseAutoplayOnHover="true")
    slide(v-for="slide in news", :key="slide.t")
      a(v-if="slide.h") {{ $t('news.' + slide.t) }}
      router-link(v-else-if="slide.r", :to="slide.r") {{ $t('news.' + slide.t) }}
      span(v-else) {{ $t('news.' + slide.t) }}
    template(#addons)
  Tutorial.no-print(v-if="uid && showTutorial && !allTasksCompleted && users && toList(users).length > 0",
  @hideTutorial="showTutorial = false",
  :someTaskCompleted = "checkAllTasks()")  
  
  .ui.sidebar.vertical.menu#side-menu.no-print(:class="{'hidden': !sidebarVisible}")
    router-link.item(to="/")
      i.home.icon.no-float
      | {{ $t('login.hp') }}
    router-link.item(to="/about")
      i.info.icon.no-float
      | {{ $t('login.ab') }}
    router-link.item(to="/privacy-policy", v-if="!uid")
      i.save.icon.no-float
      | {{ $t('login.pr') }}
    router-link.item(to="/friends")
      i.users.icon.no-float
      | {{ $t('login.fr') }}
    router-link.item(to="/maps")
      i.map.icon.no-float
      | {{ $t('login.mp') }}
    router-link.item(to="/groups")
      i.object.group.outline.icon.no-float
      | {{ $t('login.gp') }}
    router-link.item(to="/profile")
      i.user.icon.no-float
      | {{ $t('login.fg') }}
    router-link.item(to="/book", v-if="uid")
      i.book.icon.no-float
      | {{ $t('login.bk')}}
    router-link.item(to="/polis")
      i.comments.icon.no-float
      | {{ $t('login.polis') }}
    router-link.item(to="/link")
      i.globe.icon.no-float
      | {{ $t('login.link') }}
    router-link.item(to="/source_github")
      i.github.icon.no-float
      | {{ $t('login.source_github') }}
    router-link.item(to="/privacy-policy", v-if="uid")
      i.save.icon.no-float
      | {{ $t('login.pr') }}
  .ui.sidebar.bg.no-print(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")
  br.no-print
  .ui.form.container.no-print(v-if="doSearch($route.path)", v-show="uid")
    .search-input
      input(v-autofocus="", v-model="mySearch", placeholder="關鍵字搜尋", autofocus)
      i.search.icon(@click="navTo('/friends')")
  br.no-print
  router-view(
    :emailVerified = "emailVerified",
    :isInApp="isInApp", :zoom="zoom", :uid="uid", :users="users", :book="book", :center="center", :places="places", :user="user", :mySearch="mySearch", :email="email", :photoURL="photoURL", 
    @loginGoogle="loginGoogle", @toggleLogin="toggleLogin", @resendVerificationEmail="resendVerificationEmail",
    @addBook="addBook", @removeBook="removeBook", @locate="locate", @getUserLocation="getUserLocation", @logout="logout" ,@registerWithEmail="registerWithEmail" ,@loginWithEmail="loginWithEmail")
  br.no-print
  br.no-print
  chatbox#ch.no-print(@loginGoogle = "loginGoogle", @toggleLogin="toggleLogin", :uid = "uid", :user="user", :photoURL="photoURL")
  login(v-show="showLogin", @loginGoogle="loginGoogle", @toggleLogin="toggleLogin", @registerWithEmail="registerWithEmail" ,@loginWithEmail="loginWithEmail")

  </template>
  
  <script lang="ts">

  import mix from './mixins/mix';
  import { defineComponent } from 'vue';
  import Tutorial from './components/TutorialComponent.vue'; // 引入 Tutorial.vue 組件
  import { showLogin } from './developer/testOnly'; // 導入測試開關

  import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
  import { set, push, ref, onValue, get, remove } from 'firebase/database'; // 從firebase/database導入onValue函式用於資料即時讀取
  import { app, usersRef, groupsRef, booksRef, db } from './firebase'; // 導入Firebase相關配置和參考
  import { getAuth, GoogleAuthProvider, EmailAuthProvider, 
    signInWithPopup,
    linkWithCredential,
    setPersistence,
    // browserSessionPersistence,
    browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, fetchSignInMethodsForEmail, inMemoryPersistence
  } from "firebase/auth"; // 從firebase/auth導入身份驗證功能
  
  import axios from 'axios';
  import Login from './components/Login.vue'; // 導入Login
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
      Chatbox,
      Login,
      Tutorial,  // 加入 Tutorial 組件
    },
    mixins: [mix],
    data () {
      return {
        showLogin: showLogin, // Login測試開關
        allTasksCompleted: false,
        taskEventFired: false,
        //someTaskCompleted: [false, false, false, false],
        mySearch: '',
        news: [
          {
            t: 'donate_us',
            h: 'https://www.alearn.org.tw'
          },
          {
            t: 'upgrading',
            r: '/about'
          },
          {
            t: 'flag',
            r: '/profile'
          },
          { t: 'remove'},
          // 'report'
        ],
        zoom: 7,
        center: [23.5330, 121.0654],
        sidebarVisible: false, // 定義側邊欄可見狀態
        // eslint-disable-next-line
        users: null as any, // 定義用戶資料變量
        book: [] as string[], // 定義個人名簿資料變量 
        // eslint-disable-next-line
        books: {} as any, // 定義名簿資料變量 
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
        emailVerified: false,
        unreadCount: 0,
        //isLoggedIn: false, // 定義是否登入
        showTutorial: true // 控制 Tutorial 組件顯示狀態
        
      }
    },
    mounted () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this; // 儲存當前Vue實例
      //console.log(vm.isInApp); // 輸出是否在應用內部的狀態
      onValue(usersRef, (snapshot) => {
        const data = snapshot.val(); // 讀取用戶資料
        vm.users = data; // 更新用戶資料狀態
        //vm.isLoggedIn = !!this.uid; // 根據 uid 判斷是否登入
      });
      
      // 檢查使用者的登入狀態
      
      auth.onAuthStateChanged((user) => {
        
        if (user) {
          // 使用者已登入，讀取基本資料
          vm.showLogin = false;
          vm.uid = user.uid;
          vm.emailVerified = user.emailVerified;
          console.log("User photo URL:", user.photoURL);
          console.log("Provider photo URL:", user.providerData[0]?.photoURL);
          console.log("Final photo URL:", vm.photoURL);

          // 處理 providerData
          if (user.providerData && user.providerData.length > 0) {
            vm.email = user.providerData[0].email || null;
            vm.photoURL = user.providerData[0].photoURL ? decodeURI(user.providerData[0].photoURL) : "https://we.alearn.org.tw/logo-new.png";
          } else {
            // 如果沒有 providerData，使用 user 對象中的資料
            vm.email = user.email || null;
            vm.photoURL = user.photoURL ? decodeURI(user.photoURL) : "https://we.alearn.org.tw/logo-new.png";
          }
          console.log("Final photo URL:", vm.photoURL);

          const pvdata = user.providerData || [
            {
              displayName: vm.email?.split('@')[0] || 'Unknown',
              email: vm.email,
              photoURL: vm.photoURL
            }
          ];
          
          // 更新用戶資料和通知
          if (vm.users && vm.users[vm.uid]) {
            vm.user = { ...vm.users[vm.uid], providerData: pvdata };
            vm.updateNotifications();
            if (vm.user.latlngColumn) {
              vm.locate(vm.user, false);
            }
          } else {
            const usersPromise: Promise<void> = new Promise((resolve) => {
              onValue(usersRef, (snapshot) => {
                const data = snapshot.val();
                vm.users = data;
                vm.user = { ...vm.users[vm.uid] || vm.user, providerData: pvdata };
                vm.updateNotifications();
                if (vm.user.latlngColumn) {
                  vm.locate(vm.user, false);
                }
                resolve();
              }, (error) => {
                vm.user = { providerData: pvdata };
                console.error("Error fetching users:", error);
              });
            });
            const booksPromise: Promise<void> = new Promise((resolve) => {
              onValue(booksRef, (snapshot) => {
                vm.books = snapshot.val() || {};
                vm.book = vm.books[vm.uid] || [];
                resolve();
              });
            });

            const groupsPromise: Promise<void> = new Promise((resolve) => {
              onValue(groupsRef, (snapshot) => {
                vm.groups = snapshot.val();
                resolve();
              });
            });

            // 等待所有資料加載完成後執行
            Promise.all([usersPromise, booksPromise, groupsPromise]).then(() => {
              vm.$nextTick(() => {
                vm.checkAllTasks();  // 所有資料準備好後再檢查任務
              });
            });
            
          }

          // 1. 更新書本資料
          vm.book = (vm.books && vm.books[vm.uid]) || [];
          console.log(vm.book);
          
          // 使用 nextTick 確保子組件接收到最新的 props
          vm.$nextTick(() => {
            console.log('Book updated and propagated to children');
          });
        }
      });

      // 其他 onValue 監聽
      onValue(groupsRef, (snapshot) => {
        const data = snapshot.val();
        vm.groups = data;
      });

      onValue(booksRef, (snapshot) => {
        console.log('get books');
        const data = snapshot.val() || {};
        vm.books = data || {};
      });
    },
    watch: {
      photoURL(newVal, oldVal) {
        console.log("photoURL changed from", oldVal, "to", newVal);
      },
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
          this.book = (this.books && this.books[newUid]) || [];
          console.log(this.book)
          // 使用 nextTick 確保子組件接收到最新的 props
          this.$nextTick(() => {
            console.log('Book updated and propagated to children');
          });
        }
      }
    },
    methods: {
      onImageLoad() {
        console.log("Image loaded successfully:", this.photoURL);
      },
      useDefaultAvatar(event) {
        event.target.src = 'https://we.alearn.org.tw/logo-new.png'
      },
      navTo (path) {
        this.$router.push(path)
      },
      async registerWithEmail(notgoogleemail: string, notgooglepassword: string, notgooglekeeploggedin: boolean, turnstileToken: string) {
        if (!notgooglepassword || typeof notgooglepassword !== 'string') {
          alert('接收的密碼無效，請確認輸入');
          return;
        }

        // 驗證 Turnstile token
        const isValidTurnstile = await this.verifyTurnstileToken(turnstileToken)
        if (!isValidTurnstile) {
        alert('驗證失敗，請重試')
        return
        }
        

        try {
          const auth = getAuth();
          const userCredential = await createUserWithEmailAndPassword(auth, notgoogleemail, notgooglepassword);
          const user = userCredential.user;

          if (user && user.email) {
            this.email = user.email;
            this.uid = user.uid;
            this.photoURL = 'https://we.alearn.org.tw/logo-new.png';

            const pvdata = [{
              displayName: this.email?.split('@')[0] || 'Unknown',
              email: this.email,
              photoURL: this.photoURL
            }];
            this.user = { email: this.email, photoURL: this.photoURL, providerData: pvdata };

            const userRef = ref(db, 'users/' + this.uid);
            const snapshot = await get(userRef);
            if (!snapshot.exists()) {
              await set(userRef, {
                email: this.email,
                name: this.email?.split('@')[0] || 'Unknown',
                connect_me: this.email,
                photoURL: this.photoURL,
                login_method: 'email'
              });
            }

            await sendEmailVerification(user);
            alert('驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。');
            this.logout();
          } else {
            console.error('User or user email is undefined after registration');
            alert('註冊過程中發生錯誤，請稍後再試。');
          }
        } catch (error: any) {
          if (error.code === 'auth/email-already-in-use') {
            try {
              const auth = getAuth();
              const methods = await fetchSignInMethodsForEmail(auth, notgoogleemail);
              console.log(methods);
              if (methods.includes('google.com')) {
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                const credential = EmailAuthProvider.credential(notgoogleemail, notgooglepassword);
                await linkWithCredential(result.user, credential);
                alert('帳號已成功整合。');
                this.updateUserData(result.user);
                if (notgooglekeeploggedin) {
                  await setPersistence(auth, browserLocalPersistence);
                }
                if (this.autoredirect) {
                  this.$router.push('/profile');
                }
              } else if (methods.includes('password')) {
                alert('此電子郵件已被使用，請使用其他電子郵件或嘗試登入。');
              } else {
                alert('此電子郵件已被使用，請使用其他電子郵件或嘗試登入。');
              }
            } catch (linkError: any) {
              console.error("帳號整合失敗", linkError);
              alert("帳號整合失敗：" + linkError.message);
            }
          } else {
            console.error("註冊失敗：", error);
            alert("註冊失敗：" + error.message);
          }
        }
      },
      

      async verifyTurnstileToken(token: string): Promise<boolean> {
        try {
        const response = await axios.post('/api/verify-turnstile', { token })
          return response.data.success
        } catch (error) {
          console.error("Turnstile 驗證錯誤", error)
          return false
        }
      },

      updateUserData(user: any) {
        if (!user) {
          console.error('User is undefined in updateUserData');
          return;
        }
        this.email = user.email || null;
        this.uid = user.uid;
        this.photoURL = user.photoURL ? decodeURI(user.photoURL) : "https://we.alearn.org.tw/logo-new.png";
        this.emailVerified = user.emailVerified;

        const pvdata = user.providerData || [{
          displayName: this.email?.split('@')[0] || 'Unknown',
          email: this.email,
          photoURL: this.photoURL
        }];

        this.updateUserInfo(pvdata);
      },

      updateUserInfo(pvdata: any[]) {
        if (this.users && this.uid && this.users[this.uid]) {
          this.user = { ...this.users[this.uid], providerData: pvdata };
          this.updateNotifications();
          if (this.user.latlngColumn) {
            this.locate(this.user, false);
          }
        } else {
          this.fetchUserData(pvdata);
        }
      },

      async fetchUserData(pvdata: any[]) {
        try {
          onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            this.users = data;
            if (this.uid && this.users && this.users[this.uid]) {
              this.user = { ...this.users[this.uid], providerData: pvdata };
              this.updateNotifications();
              if (this.user.latlngColumn) {
                this.locate(this.user, false);
              }
            } else {
              this.user = { providerData: pvdata };
            }
          }, (error) => {
            this.user = { providerData: pvdata };
            console.error("Error fetching users:", error);
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      },
      
      async loginWithEmail(autoredirect, notgoogleemail, notgooglepassword, notgooglekeeploggedin) {
        try {
          if (notgooglekeeploggedin) {
            await setPersistence(auth, browserLocalPersistence);
          } else {
            await setPersistence(auth, inMemoryPersistence);
          }
          const userCredential = await signInWithEmailAndPassword(auth, notgoogleemail, notgooglepassword);
          const user = userCredential.user;

          if (!user.emailVerified) {
            alert('您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。');
            this.logout();
            return;
          }

          this.emailVerified = true;
          console.log('登入成功：', user);
          this.updateUserData(user);

          // 檢查是否有 Google 帳號與此 email 關聯
          const methods = await fetchSignInMethodsForEmail(auth, notgoogleemail);
          if (methods.includes('google.com')) {
            try {
              // 自動整合帳號
              const googleProvider = new GoogleAuthProvider();
              const result = await signInWithPopup(auth, googleProvider);
              const credential = EmailAuthProvider.credential(notgoogleemail, notgooglepassword);
              await linkWithCredential(result.user, credential);
              console.log('帳號已成功整合。');
              this.updateUserData(result.user);
            } catch (integrationError: any) {
              console.error("帳號整合失敗：", integrationError);
              // 不顯示警告，因為用戶已經成功登入
            }
          }

          if (autoredirect && user.emailVerified) {
            this.$nextTick().then(() => {
              this.$router.push('/profile');
            });
          }
        } catch (error: any) {
          console.error("登入失敗：", error);
          alert("登入失敗：" + error.message);
        }
      },
      resendVerificationEmail() {
        const user = getAuth().currentUser;
        if (user) {
          sendEmailVerification(user).then(() => {
            alert('驗證郵件已重新發送。');
          }).catch((error) => {
            console.error('重新發送驗證郵件失敗：', error);
            alert('重新發送驗證郵件失敗，請稍後再試。');
          });
        }
      },
      toggleLogin () {
        this.showLogin = !this.showLogin;
      },
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
        let notifications = this.users[this.uid].notifications || {};
        console.log(notifications);
        let ks = Object.keys(notifications);
        for (let j = 0; j < ks.length; j++) {
          let k = ks[j];
          notifications[k].isRead = true;
          this.unreadCount = 0;
        }
        const userNotificationsRef = ref(db, 'users/' + this.uid + '/notifications');
        set(userNotificationsRef, notifications).then(() => {
          console.log('all notification are read');
        }).catch((error) => {
          console.error('Error read notification:', error);
        });

        this.$router.push('/notifications');
      },

      doSearch: function (p) {
        return !(p.match(/(^\/$|feedback|source_github|myPlace|polis|qr|outer|flag|myFlag|place|profile|about|privacy-policy|faq|flag\/\d+|ans\/\d+)/))
      },
      myGroupIdx () {
        return (this.groups || []).filter((g) => {
          return (g.members || []).indexOf(this.uid || '') > -1
        }).map(function (g) {
          return g.idx
        })
      },
      likesGroupRes () {
        var ans = false;
        for (let i = 0; i < (this.groups || []).length; i++) {
          for (let j = 0; j < ((this.groups || [])[i].res || []).length; j++) {
            if (((this.groups || [])[i].res[j].likes || []).indexOf(this.uid) > -1) {
              ans = true
            }
          }
        }
        return ans;
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
          vm.users = {}; // 清除所有用戶資料
          vm.uid = ''; // 清除用戶ID
          vm.photoURL = ''; // 清除用戶頭像URL
          vm.$nextTick().then(() => {
            vm.$router.push('/'); // 導航回首頁          
          })
        });
      },
      checkAllTasks() {
        var someTaskCompleted = [ false, false, false, false]

        this.allTasksCompleted = (this.user || {}).allTasksCompleted || false;
        
        // check Task1: 是否有升起旗幟
        if ( this.users && this.users[this.uid] && this.users[this.uid].name && this.users[this.uid].latlngColumn ) {
          someTaskCompleted[0] = true
        } else {
          someTaskCompleted[0] = false
        }
        // check Task2: 是否有加入名簿
        if ( this.books && this.books[this.uid] && this.books[this.uid][0]) {
          someTaskCompleted[1] = true
        }   
        // check Task3: 是否有參與或創建社團
        if ( this.myGroupIdx().length > 0 ) {
          someTaskCompleted[2] = true
        }

        // check Task4: 是否有推薦資源
        if ( this.likesGroupRes())   {  
          someTaskCompleted[3] = true
        }

        var allTasksCompleted = true
        for (let i = 0; i < someTaskCompleted.length; i++) {
          if (!someTaskCompleted[i]) {
            allTasksCompleted = false
          }
        }
        this.allTasksCompleted = allTasksCompleted

        if (this.allTasksCompleted && !this.taskEventFired) {
          set(ref(db, 'users/' + this.uid + '/allTaskComleted'), true).then(() => {
            this.taskEventFired = true;
            console.log('All Task Completed.');
          }).catch((err) => {
            console.error(err)
          })
        }

        return someTaskCompleted

      },
      
      async loginGoogle(autoredirect: boolean, keeploggedin: boolean) {
        try {
          if (keeploggedin) {
            await setPersistence(auth, browserLocalPersistence);
          } else {
            await setPersistence(auth, inMemoryPersistence);
          }
          const result = await signInWithPopup(auth, provider);
          const credential = GoogleAuthProvider.credentialFromResult(result);

          if (credential) {
            // 如果 credential 存在，您可以安全地訪問 accessToken
            const accessToken = credential.accessToken;
            console.log('Access Token:', accessToken);
          } else {
            // 處理 credential 不存在的情況
            console.warn('No credential returned from signInWithPopup.');
          }

          const user = result.user;

          // 檢查是否有相同 email 的帳號
          if (user && user.email) {
            const methods = await fetchSignInMethodsForEmail(auth, user.email);
            if (methods.length > 0 && !methods.includes('google.com')) {
              const userRef = ref(db, 'users');
              const snapshot = await get(userRef);
              const users = snapshot.val();
              const existingUser = Object.values(users).find((u: any) => u && u.email === user.email && !u.googleUID);

              if (existingUser) {
                try {
                  await linkWithCredential(user, credential!);
                  console.log('帳號已成功整合。');
                  this.updateUserData(user);
                } catch (error) {
                  console.error("帳號整合失敗", error);
                }
              }
            }
          }

          // 登入成功後的處理邏輯
          this.updateUserData(user);
          if (autoredirect) {
            this.$router.push('/profile');
          }
        } catch (error: any) {
          console.error("Google 登入失敗：", error);
          alert("Google 登入失敗：" + error.message);
        }
      },
      updateNotifications: function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        vm.notifications = (vm.user || {}).notifications || {};
        vm.unreadCount = Object.values(vm.notifications).filter(n => !n.isRead).length;
      },
      handleAuthentication(authFunction, successCallback, errorCallback) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        authFunction()
          .then((result) => {
            if (!result || !result.user) {
              console.error('Authentication result or user is undefined');
              alert('認證過程中發生錯誤，請稍後再試。');
              return;
            }
            const user = result.user;
            vm.updateUserData(user);
            successCallback(result);
          })
          .catch((error) => {
            console.error("Authentication error:", error);
            errorCallback(error);
          });
      }
    }
  });
  
  </script>
    
<style lang="scss">

@import "./scss/global.scss";
@import "./scss/phone.scss";
@import "./scss/fat.scss";
@import "./scss/navbar.scss";
@import "./scss/sidebar.scss";
@import "./scss/main-layout.scss";
@import "./scss/printer.scss";

</style>
