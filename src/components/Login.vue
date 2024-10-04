<template lang="pug">
  #login-bg.ui.dimmer.modals.visible.active.clickable(style="background: rgba(0, 0, 0, 0.6);", @click="toggleLogin()")
    #login-main.ui.middle.aligned.center.aligned.grid(style="height: 100vh;")
      .column(style="max-width: 420px;")
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
                .cf-turnstile(data-sitekey="0x4AAAAAAAwqeJZqvEuGZj6H")
                  //- ,data-callback="javascriptCallback")              
              .field
                .ui.checkbox(@click.stop)
                  input(type="checkbox" v-model="keeploggedin")
                  label {{$t('login.keep_me_logged_in')}}

            p 新用戶？按此
              .ui.large.basic.button#register-btn(@click.stop="registerWithEmail") 註冊
</template>

  
<script lang="ts">
declare global {
  interface Window {
    turnstile: any;
  }
}
import { defineComponent, ref, watch, onMounted } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default defineComponent({
  name: "LoginBox",
  setup(props, { emit }) {
    const users_email = ref('');
    const user_password = ref('');
    const keeploggedin = ref(false);
    const turnstileToken = ref(null);

    watch(keeploggedin, (newVal) => {
      localStorage.setItem('keeploggedin', JSON.stringify(newVal));
    });

    onMounted(() => {
      const storedValue = localStorage.getItem('keeploggedin');
      if (storedValue !== null) {
        keeploggedin.value = JSON.parse(storedValue);
      }

      // 初始化 Turnstile
      (window as any).turnstile.render('.cf-turnstile', {
        sitekey: '0x4AAAAAAAwqeJZqvEuGZj6H',
        callback: (token) => {
          turnstileToken.value = token;
        },
      });
    });

    const loginGoogle = () => {
      let autoredirect = true;
      const path = window.location.pathname;

      if (path === '/friends' || path === '/maps' || path === '/privacy-policy' || path.startsWith('/flag') || path.startsWith('/group')) {
        autoredirect = false;
      }

      emit('loginGoogle', autoredirect, keeploggedin.value);
    };

    const toggleLogin = () => {
      emit('toggleLogin');
    };

    const validateEmail = (email: string): boolean => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const registerWithEmail = () => {
      if (!turnstileToken.value) {
        alert('請完成驗證');
        return;
      }

      console.log("users_email:", users_email.value);
      console.log("user_password:", user_password.value);
      console.log('Register clicked');

      if (!users_email.value || !user_password.value) {
        window.alert('請先填寫email和密碼，或使用Google登入');
        return;
      }

      if (!validateEmail(users_email.value)) {
        alert('email格式錯誤，請重試');
        return;
      }

      if (!user_password.value || typeof user_password.value !== 'string') {
        alert('密碼請至少包含一個英文字，請重新輸入');
        return;
      }

      emit('registerWithEmail', users_email.value, user_password.value, keeploggedin.value, turnstileToken.value);
    };

    const loginWithEmail = () => {
      let autoredirect = true;
      console.log('Login clicked');
      const path = window.location.pathname;

      if (!validateEmail(users_email.value)) {
        alert('email格式錯誤，請重試');
        return;
      }

      if (path === '/friends' || path === '/maps' || path === '/privacy-policy' || path.startsWith('/flag') || path.startsWith('/group')) {
        autoredirect = false;
      }

      if (!user_password.value || typeof user_password.value !== 'string') {
        alert('密碼無效，請重新輸入');
        return;
      }

      emit('loginWithEmail', autoredirect, users_email.value, user_password.value, keeploggedin.value);
    };

    const resetPassword = () => {
      console.log("Reset password function triggered");
      console.log("Email for reset:", users_email.value);
      
      if (!validateEmail(users_email.value)) {
        alert('請先輸入有效的電子郵件地址');
        return;
      }

      const auth = getAuth();
      console.log("Firebase auth object:", auth);

      sendPasswordResetEmail(auth, users_email.value)
        .then(() => {
          alert('密碼重置郵件已發送，請檢查您的郵箱');
          console.log("Password reset email sent successfully");
        })
        .catch((error: { code: string; message: string }) => {
          console.error("密碼重置郵件發送失敗：", error.code, error.message);
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
    };

    return {
      users_email,
      user_password,
      keeploggedin,
      loginGoogle,
      toggleLogin,
      registerWithEmail,
      loginWithEmail,
      resetPassword,
    };
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