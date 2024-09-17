<template lang="pug">
  #login-bg.ui.dimmer.modals.visible.active.clickable(style="background: rgba(0, 0, 0, 0.6);", @click="toggleLogin()")
    #login-main.ui.middle.aligned.center.aligned.grid(style="height: 100vh;")
      .column(style="max-width: 350px;")
        .ui.raised.segment
          h2.ui.black.header(style="font-size: 1.5rem; font-weight: 600;")
            | {{$t('login.login_into_your_account')}}
  
          //- Google Login Button
          .ui.fluid.large.button(@click.stop="loginGoogle", style="background-color: #4285F4 !important; color: white;")
            i.google.icon
            | {{$t('login.login_with_google')}}

          .ui.horizontal.divider(style="color: #ccc;") {{$t('login.or')}}
  
          //- Email & Password Login Form
          .ui.form.segment(style="border-radius: 10px; padding: 15px; background-color: #f0f0f0;")
            .field
              .ui.left.icon.input
                i.envelope.icon
                input(type="text" name="email" placeholder="E-mail address", style="font-size: 14px;", v-model="users_email", @click.stop)

            .field
              .ui.left.icon.input
                i.lock.icon
                input(type="password" name="user_password" placeholder="Password", style="font-size: 14px;", v-model="user_password", @click.stop)

            .ui.fluid.large.button(@click.prevent="loginWithEmail", style="background-color: #e47e10 ; color: white; font-weight: bold;") 登入

            a.small.forgot-password(@click="resetPassword") {{$t('login.forgot_password')}}

          form.ui.large.form
            .ui.segment(style="border: none; padding-top: 10px;")
              .field
                .ui.checkbox(@click.stop)
                  input(type="checkbox" v-model="keeploggedin")
                  label {{$t('login.keep_me_logged_in')}}

            p 新用戶？按此
              .ui.large.basic.button#register-btn(@click.stop="registerWithEmail") 註冊
</template>

  
  <script>
import { defineComponent } from 'vue';
import { getAuth, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, fetchSignInMethodsForEmail } from 'firebase/auth';

export default defineComponent({
  name: "LoginBox",
  data () {
    return {
      users_email: '',  // 使用者輸入的電子郵件
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
    // 註冊帳號方法
    /* registerWithEmail: function () {
      console.log("users_email:", this.users_email);
      console.log("user_password:", this.user_password); // 確認密碼值
      console.log('Register clicked'); // 確認方法是否被觸發
      console.log(this.$route.path);

      if (!this.users_email || !this.user_password) {
        window.alert('請先填寫email和密碼');
        return;
      }

      // 驗證email格式
      if (!this.validateEmail(this.users_email)) {
        alert('email格式錯誤，請重試');
        return;
      }

      if (!this.user_password || typeof this.user_password !== 'string') {
        alert('密碼請至少包含一個英文字，請重新輸入');
        return;
      }

      this.$emit('registerWithEmail', this.users_email, this.user_password, this.keeploggedin);
    }, */
    async registerWithEmail() {
      if (this.password !== this.confirmPassword) {
        alert(this.$t('login.password_mismatch'));
        return;
      }

      const auth = getAuth();
      
      try {
        // 检查是否存在相同邮箱的账号
        const signInMethods = await fetchSignInMethodsForEmail(auth, this.email);
        
        if (signInMethods.includes('google.com')) {
          // 存在Google账号,尝试整合
          const provider = new GoogleAuthProvider();
          provider.setCustomParameters({ login_hint: this.email });
          
          try {
            await signInWithPopup(auth, provider);
            alert(this.$t('login.account_linked'));
          } catch (error) {
            console.error("Google账号整合失败:", error);
            alert(this.$t('login.link_failed'));
          }
        } else {
          // 不存在Google账号,正常注册
          this.$emit('registerWithEmail', this.email, this.password);
        }
      } catch (error) {
        console.error("检查账号失败:", error);
        alert(this.$t('login.check_account_failed'));
      }
    },
    // 用 email 密碼登入方法
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
    // 重設密碼方法
    resetPassword: function () {
      console.log("Reset password function triggered");  // 偵錯: 確認重設密碼方法是否被觸發
      console.log("Email for reset:", this.users_email);  // 偵錯: 確認輸入的 email 值
      
      // 驗證 email 格式
      if (!this.validateEmail(this.users_email)) {
        alert('請先輸入有效的電子郵件地址');
        return;
      }

      const auth = getAuth();  // 取得 Firebase auth 物件
      console.log("Firebase auth object:", auth);  // 偵錯: 確認 auth 物件是否正確被初始化

      sendPasswordResetEmail(auth, this.users_email)
        .then(() => {
          alert('密碼重置郵件已發送，請檢查您的郵箱');
          console.log("Password reset email sent successfully");  // 偵錯: 確認郵件已發送
        })
        .catch((error) => {
          console.error("密碼重置郵件發送失敗：", error.code, error.message);  // 偵錯: 詳細的錯誤訊息
          // 更具體的錯誤處理
          switch (error.code) {
            case 'auth/invalid-email':
              alert('無效的電子郵件地址');
              break;
            case 'auth/user-not-found':
              alert('找不到該電子郵件對應的帳號');
              break;
            default:
              alert('密碼重置郵件發送失敗，請稍後再試');
          }
        });
    }
  }
});
</script>


<style scoped>
#login-bg {
  position: fixed;
  z-index: 1000;
  transition: background 0.3s ease;
}

#login-main {
  position: relative;
  z-index: 1001;
}

.column {
  border-radius: 10px !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ui.segment {
  padding: 1.5em;
  border-radius: 8px !important;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ui.button {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.ui.button:hover {
  transform: translateY(-1px);
}

.ui.large.button {
  background-color: #444;
  color: white;
}

.ui.large.button:hover {
  background-color: #333;
}

.ui.horizontal.divider {
  color: #ccc;
}

h2.ui.header {
  font-size: 1.5rem;
  color: #000;
}

.ui.left.icon.input input {
  font-size: 14px;
  padding: 10px;
}

.forgot-password {
  font-size: 0.9rem;
  text-align: right;
  display: block;
  margin-top: 1em;
}

#register-btn {
  margin-left: .6em;
  border: 1px solid #333;
}

</style>
