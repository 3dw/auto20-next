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
  
          .ui.horizontal.divider(style="color: #bbb;") {{$t('login.or')}}
  
          // router-link.ui.large.purple.button(to="/about", @click.stop="toggleLogin()", style="background-color: #6a1b9a; color: white; font-weight: bold;") {{$t('login.lm')}}
  
         
          //- Email & Password Login Form
          .ui.segment(style="border-radius: 10px; padding: 15px; background-color: #f9f9f9;")
            .field
              .ui.left.icon.input
                i.user.icon
                //input(type="text" name="email" placeholder="E-mail address", style="font-size: 14px;", v-model="email")
                input(type="text" name="users_email" placeholder="E-mail address", style="font-size: 14px;", v-model="users_email", @click.stop)

            .field
              .ui.left.icon.input
                i.lock.icon
                input(type="password" name="user_password" placeholder="Password", style="font-size: 14px;", v-model="user_password", @click.stop)



            .field
              .ui.fluid.large.teal.button(@click.prevent="loginWithEmail", style="background-color: #2185d0; color: white; font-weight: bold;") 登入

              //- 顯示忘記密碼連結
              a.red.forget-password(@click="resetPassword") {{$t('login.forgot_password')}}

          form.ui.large.form
            .ui.segment(style="border: none; padding-top: 10px;")
              .field
                .ui.checkbox(@click.stop)
                  input(type="checkbox" v-model="keeploggedin")
                  label {{$t('login.keep_me_logged_in')}}

              
            p 新用戶？按此
              .ui.large.basic.blue.button#register-btn(@click.stop="registerWithEmail", ) 註冊

  </template>
  

<script>
import { defineComponent } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default defineComponent({
  name: "LoginBox",
  data () {
    return {
      users_email: '',
      user_password: '',
      keeploggedin: false
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
    // 驗證email格式的function
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    },
    registerWithEmail: function () {
      var autoredirect = true;
      console.log("users_email:", this.users_email);
      console.log("user_password:", this.user_password); // 確認密碼值
      console.log('Register clicked'); // 確認方法是否被觸發
      console.log(this.$route.path);

      // 驗證email格式
      if (!this.validateEmail(this.users_email)) {
        alert('email格式錯誤，請重試');
        return;
      }

      if (this.$route.path === '/friends' || this.$route.path === '/maps' || this.$route.path === '/privacy-policy' || this.$route.path.startsWith('/flag') || this.$route.path.startsWith('/group')) {
        autoredirect = false;
      }

      if (!this.user_password || typeof this.user_password !== 'string') {
        alert('密碼無效，請重新輸入');
        return;
      }

      this.$emit('registerWithEmail', autoredirect, this.users_email, this.user_password, this.keeploggedin);
    },
    loginWithEmail: function () {
      var autoredirect = true;
      console.log('Login clicked'); // 確認方法是否被觸發
      console.log(this.$route.path);

      // 驗證email格式
      if (!this.validateEmail(this.users_email)) {
        alert('email格式錯誤，請重試');
        return;
      }

      if (this.$route.path === '/friends' || this.$route.path === '/maps' || this.$route.path === '/privacy-policy' || this.$route.path.startsWith('/flag') || this.$route.path.startsWith('/group')) {
        autoredirect = false;
      }

      if (!this.user_password || typeof this.user_password !== 'string') {
        alert('密碼無效，請重新輸入');
        return;
      }

      this.$emit('loginWithEmail', autoredirect, this.users_email, this.user_password, this.keeploggedin);
    },
    resetPassword: function () {
      if (!this.validateEmail(this.users_email)) {
        alert('請先輸入有效的電子郵件地址');
        return;
      }

      const auth = getAuth();
      sendPasswordResetEmail(auth, this.users_email)
        .then(() => {
          alert('密碼重置郵件已發送，請檢查您的郵箱');
        })
        .catch((error) => {
          console.error("密碼重置郵件發送失敗：", error);
          alert('密碼重置郵件發送失敗，請稍後再試');
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

.forget-password {
  width: 100%;
  text-align: right;
  display: inline-block;
  margin: 1em !important;
  padding: .2em;
}

#register-btn {
  margin-left: .6em;
}

</style>
