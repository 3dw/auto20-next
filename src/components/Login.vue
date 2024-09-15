<template lang="pug">
  #login-bg.ui.dimmer.modals.visible.active.clickable(style="background: rgba(0, 0, 0, 0.7);", @click="toggleLogin()")
    #login-main.ui.middle.aligned.center.aligned.grid(style="height: 100vh;")
      .column(style="max-width: 400px;")
        .ui.raised.segment
          h2.ui.teal.image.header
            i.user.circle.icon(style="font-size: 3rem; color: #2185d0;")
            .content(style="padding-left: 10px;") {{$t('login.login_into_your_account')}}
  
          //- Google Login Button
          .ui.fluid.large.orange.button(@click.stop="loginGoogle", style="background-color: #FF6F00; color: white; font-weight: bold;")
            i.google.icon
            | {{$t('login.login_with_google')}}
  
          form.ui.large.form
            .ui.segment(style="border: none; padding-top: 10px;")
              .field
                .ui.checkbox(@click.stop)
                  input(type="checkbox" v-model="keeploggedin")
                  label {{$t('login.keep_me_logged_in')}}
  
          .ui.horizontal.divider(style="color: #bbb;") {{$t('login.or')}}
  
          router-link.ui.large.purple.button(to="/about", @click.stop="toggleLogin()", style="background-color: #6a1b9a; color: white; font-weight: bold;") {{$t('login.lm')}}
  
          //- Email & Password Login Form
          .ui.stacked.segment(style="border-radius: 10px; padding: 15px; background-color: #f9f9f9;")
            .field
              .ui.left.icon.input
                i.user.icon
                input(type="text" name="email" placeholder="E-mail address", v-model="email", style="font-size: 14px;")
            .field
              .ui.left.icon.input
                i.lock.icon
                input(type="password" name="password" placeholder="Password", v-model="password", style="font-size: 14px;")
            .field
              .ui.checkbox
                input(type="checkbox" tabindex="0" class="hidden")
                label 維持登入狀態
            .ui.two.buttons
                .ui.fluid.large.teal.button(@click="loginWithEmail", style="background-color: #2185d0; color: white; font-weight: bold;") 登入
                .ui.fluid.large.blue.button(@click="registerWithEmail", style="background-color: #007bff; color: white; font-weight: bold;") 註冊
  </template>
  

<script>
import { defineComponent } from 'vue';
import { app } from '../firebase'; // 請根據實際路徑修改
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
    
export default defineComponent({
  name: "LoginBox",
  data () {
    return {
      keeploggedin: false,
      email: '',
        password: ''
    }
  },
  watch: {
    keeploggedin(newVal) {
      // 當 keeploggedin 變化時，將其保存到 localStorage
      localStorage.setItem('keeploggedin', JSON.stringify(newVal));
    }
  },
  mounted() {
    // 從 localStorage 讀取 keeploggedin 的值
    const storedValue = localStorage.getItem('keeploggedin');
    if (storedValue !== null) {
      this.keeploggedin = JSON.parse(storedValue);
    }
  },
  methods: {
    loginGoogle: function () {
      var autoredirect = true;

      console.log(this.$route.path)

      if (this.$route.path === '/friends' || this.$route.path === '/maps' || this.$route.path === '/privacy-policy' || this.$route.path.startsWith('/flag') || this.$route.path.startsWith('/group')) {
        autoredirect = false;
      }

      this.$emit('loginGoogle', autoredirect, this.keeploggedin);
    },
    toggleLogin: function () {
      this.$emit('toggleLogin');
    },
    loginWithEmail() {
    const auth = getAuth(app);
    const persistence = this.keeploggedin ? browserLocalPersistence : browserSessionPersistence;
    setPersistence(auth, persistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, this.email, this.password);
      })
      .then((userCredential) => {
        // 登入成功
        const user = userCredential.user;
        console.log('登入成功', user);
        this.$emit('loginSuccess', user);
        this.toggleLogin();
      })
      .catch((error) => {
        // 處理錯誤
        const errorCode = error.code;
        let errorMessage = '';
        switch (errorCode) {
          case 'auth/user-not-found':
            errorMessage = '使用者不存在，請先註冊。';
            break;
          case 'auth/wrong-password':
            errorMessage = '密碼錯誤，請重試。';
            break;
          case 'auth/email-already-in-use':
            errorMessage = '該電子郵件已被註冊。';
            break;
          case 'auth/invalid-email':
            errorMessage = '無效的電子郵件地址。';
            break;
          case 'auth/weak-password':
            errorMessage = '密碼太弱，請輸入至少6位字符的密碼。';
            break;
          default:
            errorMessage = error.message;
        }
        console.error('錯誤', errorCode, errorMessage);
        alert('錯誤：' + errorMessage);
      });
    },



    registerWithEmail() {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // 註冊成功
        const user = userCredential.user;
        console.log('註冊成功', user);
        // 通知父組件更新狀態
        this.$emit('loginSuccess', user);
        // 關閉登入視窗
        this.toggleLogin();
      })
      .catch((error) => {
        // 處理錯誤
        const errorCode = error.code;
        let errorMessage = '';
        switch (errorCode) {
          case 'auth/user-not-found':
            errorMessage = '使用者不存在，請先註冊。';
            break;
          case 'auth/wrong-password':
            errorMessage = '密碼錯誤，請重試。';
            break;
          case 'auth/email-already-in-use':
            errorMessage = '該電子郵件已被註冊。';
            break;
          case 'auth/invalid-email':
            errorMessage = '無效的電子郵件地址。';
            break;
          case 'auth/weak-password':
            errorMessage = '密碼太弱，請輸入至少6位字符的密碼。';
            break;
          default:
            errorMessage = error.message;
        }
        console.error('錯誤', errorCode, errorMessage);
        alert('錯誤：' + errorMessage);
      });
    }
    
  }
});
</script>


<style scoped>
#login-bg {
  position: fixed;
  z-index: 999901 !important;
  transition: background 0.3s ease; /* 平滑背景變化效果 */
}

#login-main {
  position: relative;
  z-index: 999902 !important;
}

.column {
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* 添加柔和的陰影效果 */
}

.ui.segment {
  padding: 2em;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.ui.button {
  transition: background-color 0.3s ease, transform 0.2s ease; /* 按鈕過渡效果 */
}

.ui.button:hover {
  transform: translateY(-2px); /* 懸停時按鈕上移 */
}

.ui.teal.button:hover {
  background-color: #1678c2 !important; /* 更深的藍色懸停效果 */
}



.ui.orange.button:hover {
  background-color:  #ffc107 !important; /* 更亮的橘色懸停效果 */
}

.ui.purple.button:hover {
  background-color: #7b1fa2 !important; /* 更亮的紫色懸停效果 */
}

h2.ui.teal.image.header .icon {
  font-size: 3rem;
  color: #2185d0;
}

.ui.checkbox label {
  font-size: 14px;
}

.ui.left.icon.input input {
  font-size: 14px;
  padding: 10px;
}

.ui.stacked.segment {
  background-color: #f9f9f9; /* 柔和的灰色背景 */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
}

.ui.horizontal.divider {
  color: #bbb; /* 淡色的分隔線文字 */
}

.ui.two.buttons .button {
  font-weight: bold;
  padding: 10px 0;
  border-radius: 6px;
}

</style>
