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
            // i.google.icon
            | {{ $t('login.login' )}}
  
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
  // 教學組件，根據登錄狀態和顯示狀態來控制顯示
  //Tutorial(v-if="isLoggedIn && showTutorial" @hideTutorial="showTutorial = false")    
  Tutorial(v-if="uid && showTutorial && !allTasksCompleted && users && toList(users).length > 0",
  @hideTutorial="showTutorial = false",
  :someTaskCompleted = "checkAllTasks()")  
  
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
    router-link.item(to="/source_github")
      i.github.icon.no-float
      | {{ $t('login.source_github') }}
  
  .ui.sidebar.bg(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")
  br
  
  .ui.form.container(v-if="doSearch($route.path)", v-show="uid")
    .search-input
      input(v-autofocus="", v-model="mySearch", placeholder="關鍵字搜尋", autofocus)
      i.search.icon(@click="navTo('/friends')")
  
  br
  
  router-view(
    :emailVerified = "emailVerified",
    :isInApp="isInApp", :zoom="zoom", :uid="uid", :users="users", :book="book", :center="center", :places="places", :user="user", :mySearch="mySearch", :email="email", :photoURL="photoURL", 
    @loginGoogle="loginGoogle", @toggleLogin="toggleLogin", @resendVerificationEmail="resendVerificationEmail",
    @addBook="addBook", @removeBook="removeBook", @locate="locate", @getUserLocation="getUserLocation", @logout="logout" ,@registerWithEmail="registerWithEmail" ,@loginWithEmail="loginWithEmail")
  
  br
  br
  
  chatbox#ch(@loginGoogle = "loginGoogle", @toggleLogin="toggleLogin", :uid = "uid", :user="user", :photoURL="photoURL")
  
  login(v-if="showLogin", @loginGoogle="loginGoogle", @toggleLogin="toggleLogin", @registerWithEmail="registerWithEmail" ,@loginWithEmail="loginWithEmail")

  </template>
  
  <script lang="ts">

  import mix from './mixins/mix';
  import { defineComponent } from 'vue';
  import Tutorial from './components/TutorialComponent.vue'; // 引入 Tutorial.vue 組件
  import { showLogin } from './developer/testOnly'; // 導入測試開關

  import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
  import { set, push, ref, onValue, get } from 'firebase/database'; // 從firebase/database導入onValue函式用於資料即時讀取
  import { app, usersRef, groupsRef, booksRef, db } from './firebase'; // 導入Firebase相關配置和參考
  import { getAuth, GoogleAuthProvider, EmailAuthProvider, 
    signInWithPopup,
    linkWithCredential,
    setPersistence,
    // browserSessionPersistence,
    browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,fetchSignInMethodsForEmail
  } from "firebase/auth"; // 從firebase/auth導入身份驗證功能
  
  
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
            vm.email = user.providerData[0].email;
            vm.photoURL = user.providerData[0].photoURL ? decodeURI(user.providerData[0].photoURL) : "https://we.alearn.org.tw/logo-new.png";
            console.log("1Final photo URL:", vm.photoURL);
          } else {
            // 如果沒有 providerData，使用 user 對象中的資料
            vm.email = user.email;
            vm.photoURL = user.photoURL ? decodeURI(user.photoURL) : "https://we.alearn.org.tw/logo-new.png";
            console.log("2Final photo URL:", vm.photoURL);
          }

          const pvdata = user.providerData || [
            {
              displayName: vm.email?.split('@')[0],
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
      /* registerWithEmail(notgoogleemail, notgooglepassword, notgooglekeeploggedin) {
        if (!notgooglepassword || typeof notgooglepassword !== 'string') {
          alert('接收的密碼無效，請確認輸入');
          return;
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        const auth = getAuth();
        const handleRegistration = () => {
          createUserWithEmailAndPassword(auth, notgoogleemail, notgooglepassword)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("使用者註冊成功：", user);

              vm.email = user.email;
              vm.uid = user.uid;
              vm.photoURL = 'https://we.alearn.org.tw/logo-new.png';

              const pvdata = [{
                displayName: vm.email?.split('@')[0],
                email: vm.email,
                photoURL: vm.photoURL
              }];

              vm.user = { email: vm.email, photoURL: vm.photoURL, providerData: pvdata };

              // 先檢查用戶資料是否存在
              const userRef = ref(db, 'users/' + vm.uid);
              get(userRef).then((snapshot) => {
                if (!snapshot.exists()) {
                  // 如果用戶資料不存在，則設置新的資料
                  set(userRef, {
                    email: vm.email,
                    name: vm.email?.split('@')[0],
                    connect_me: vm.email,
                    photoURL: vm.photoURL,
                    login_method: 'email'
                  });
                }
              }).catch((error) => {
                console.error("檢查用戶資料時出錯：", error);
              });

              // 發送驗證郵件
              sendEmailVerification(user).then(() => {
                alert('驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。');

                vm.logout(); // 登出

              }).catch((error) => {
                console.error("發送驗證郵件失敗：", error);
                alert('發送驗證郵件失敗，請稍後再試。');
              });
            })
            .catch((error) => {
              console.error("註冊失敗：", error);
              alert("註冊失敗：" + error.message);
            });
        };

        if (notgooglekeeploggedin) {
          setPersistence(auth, browserLocalPersistence).then(() => {
            handleRegistration();
          }).catch((error) => {
            console.error("持久性設置錯誤：", error);
          });
        } else {
          handleRegistration();
        }
      }, */
      registerWithEmail(notgoogleemail, notgooglepassword, notgooglekeeploggedin) {
        if (!notgooglepassword || typeof notgooglepassword !== 'string') {
          alert('接收的密碼無效，請確認輸入');
          return;
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        const auth = getAuth();
        const handleRegistration = () => {
          // 首先检查是否存在相同邮箱的Google账号
          fetchSignInMethodsForEmail(auth, notgoogleemail)
            .then((signInMethods) => {
              if (signInMethods.includes('google.com')) {
                // 存在Google账号，尝试整合
                const provider = new GoogleAuthProvider();
                provider.setCustomParameters({ login_hint: notgoogleemail });
                signInWithPopup(auth, provider)
                  .then((result) => {
                    // Google账号登录成功，现在尝试链接邮箱密码
                    const credential = EmailAuthProvider.credential(notgoogleemail, notgooglepassword);
                    linkWithCredential(result.user, credential)
                      .then(() => {
                        alert('Google账号已成功关联到您的邮箱账号');
                        // 继续原有的验证邮件发送流程
                        sendEmailVerification(result.user).then(() => {
                          alert('驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。');
                          vm.logout(); // 登出
                        }).catch((error) => {
                          console.error("發送驗證郵件失敗：", error);
                          alert('發送驗證郵件失敗，請稍後再試。');
                        });
                      })
                      .catch((error) => {
                        console.error("账号关联失败：", error);
                        alert("账号关联失败：" + error.message);
                      });
                  })
                  .catch((error) => {
                    console.error("Google账号登录失败：", error);
                    alert("Google账号登录失败，无法完成整合：" + error.message);
                  });
              } else {
                // 不存在Google账号，进行正常的邮箱注册
                createUserWithEmailAndPassword(auth, notgoogleemail, notgooglepassword)
                  .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("使用者註冊成功：", user);

                    vm.email = user.email;
                    vm.uid = user.uid;
                    vm.photoURL = 'https://we.alearn.org.tw/logo-new.png';

                    const pvdata = [{
                      displayName: vm.email?.split('@')[0],
                      email: vm.email,
                      photoURL: vm.photoURL
                    }];

                    vm.user = { email: vm.email, photoURL: vm.photoURL, providerData: pvdata };

                    // 先檢查用戶資料是否存在
                    const userRef = ref(db, 'users/' + vm.uid);
                    get(userRef).then((snapshot) => {
                      if (!snapshot.exists()) {
                        // 如果用戶資料不存在，則設置新的資料
                        set(userRef, {
                          email: vm.email,
                          name: vm.email?.split('@')[0],
                          connect_me: vm.email,
                          photoURL: vm.photoURL,
                          login_method: 'email'
                        });
                      }
                    }).catch((error) => {
                      console.error("檢查用戶資料時出錯：", error);
                    });

                    // 發送驗證郵件
                    sendEmailVerification(user).then(() => {
                      alert('驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。');

                      vm.logout(); // 登出

                    }).catch((error) => {
                      console.error("發送驗證郵件失敗：", error);
                      alert('發送驗證郵件失敗，請稍後再試。');
                    });
                  })
                  .catch((error) => {
                    console.error("註冊失敗：", error);
                    alert("註冊失敗：" + error.message);
                  });
              }
            })
            .catch((error) => {
              console.error("检查账号失败：", error);
              alert("检查账号失败，请稍后重试：" + error.message);
            });
        };

        if (notgooglekeeploggedin) {
          setPersistence(auth, browserLocalPersistence).then(() => {
            handleRegistration();
          }).catch((error) => {
            console.error("持久性設置錯誤：", error);
          });
        } else {
          handleRegistration();
        }
      },
      loginWithEmail(autoredirect, notgoogleemail, notgooglepassword, notgooglekeeploggedin) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias  
        const vm = this;
        const auth = getAuth();
        const handleLogin = () => {
          signInWithEmailAndPassword(auth, notgoogleemail, notgooglepassword)
            .then((userCredential) => {
              const user = userCredential.user;

              if (!user.emailVerified) {
                alert('您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。');

                vm.logout(); // 登出

                return;
              } else {
                vm.emailVerified = true
                console.log('登入成功：', user);
                vm.email = user.email;
                vm.uid = user.uid;
                vm.photoURL = user.photoURL || null;

                if (autoredirect && user.emailVerified) {
                  vm.$nextTick().then(() => {
                    vm.$router.push('/profile');
                  });
                }
              }

            })
            .catch((error) => {
              console.error("登入失敗：", error);
              alert("登入失敗：" + error.message);
            });
        };

        if (notgooglekeeploggedin) {
          setPersistence(auth, browserLocalPersistence).then(() => {
            handleLogin();
          }).catch((error) => {
            console.error("持久性設置錯誤：", error);
          });
        } else {
          handleLogin();
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
        let notifications = this.users[this.uid].notifications || new Object;
        console.log(notifications);
        let ks = Object.keys(notifications)
        for (let j = 0; j < ks.length; j++) {
          let k = ks[j]
          notifications[k].isRead = true
          this.unreadCount = 0
        }
        const userNotificationsRef = ref(db, 'users/' + this.uid + '/notifications');
        set(userNotificationsRef, notifications).then(() => {
          console.log('all notification are read')
        }).catch((error) => {
          console.error('Error read notification:', error);
        });

        this.$router.push('/notifications');
      },

      doSearch: function (p) {
        return !(p.match(/(^\/$|myPlace|polis|qr|outer|flag|myFlag|place|profile|about|privacy-policy|faq|flag\/\d+|ans\/\d+)/))
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
      
      loginGoogle: function (autoredirect, keeploggedin) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        vm.showLogin = false;
        if (this.isInApp) {
          window.alert('本系統不支援Facebook, Line等App內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝');
        } else {
          // 如果 keeploggedin 為 true，設置持久性為 localStorage，否則不設置
          const handleLogin = () => {
            this.handleAuthentication(
              () => signInWithPopup(auth, provider),
              (user) => {
                if (autoredirect) {
                  this.$nextTick().then(() => {
                    this.$router.push('/profile');
                  });
                }
              },
              (error) => {
                if (error.message.includes('sessionStorage')) {
                  window.alert('瀏覽器不支持sessionStorage，請檢查瀏覽器設置或更換瀏覽器再試一次。');
                }
              }
            );
          };

          if (keeploggedin) {
            setPersistence(auth, browserLocalPersistence)
              .then(() => {
                handleLogin();
              })
              .catch((error) => {
                console.error("Persistence error:", error);
              });
          } else {
            handleLogin();
          }
        }
      },
      updateNotifications: function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        vm.notifications = (vm.user || {}).notifications || {};
        vm.unreadCount = Object.values(vm.notifications).filter(n => !n.isRead).length;
      },
      updateUserData(user) {
        this.email = user.email;
        this.uid = user.uid;
        this.photoURL = user.photoURL ? decodeURI(user.photoURL) : "https://we.alearn.org.tw/logo-new.png";
        this.emailVerified = user.emailVerified;

        const pvdata = user.providerData || [{
          displayName: this.email?.split('@')[0],
          email: this.email,
          photoURL: this.photoURL
        }];

        this.updateUserInfo(pvdata);
      },
      updateUserInfo(pvdata) {
        if (this.users && this.users[this.uid]) {
          this.user = { ...this.users[this.uid], providerData: pvdata };
          this.updateNotifications();
          if (this.user.latlngColumn) {
            this.locate(this.user, false);
          }
        } else {
          this.fetchUserData(pvdata);
        }
      },
      fetchUserData(pvdata) {
        onValue(usersRef, (snapshot) => {
          const data = snapshot.val();
          this.users = data;
          this.user = { ...this.users[this.uid] || this.user, providerData: pvdata };
          this.updateNotifications();
          if (this.user.latlngColumn) {
            this.locate(this.user, false);
          }
        }, (error) => {
          this.user = { providerData: pvdata };
          console.error("Error fetching users:", error);
        });
      },
      handleAuthentication(authFunction, successCallback, errorCallback) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const vm = this;
        authFunction()
          .then((result) => {
            const user = result.user;
            vm.updateUserData(user);
            successCallback(user);
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

</style>
  