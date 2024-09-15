<template lang="pug">
    #login-bg.ui.dimmer.modals.visible.active.clickable(style="background: rgba(0, 0, 0, 0.7);", @click="toggleLogin()")
      #login-main.ui.middle.aligned.center.aligned.grid(style="height: 100vh;")
        .column(style="max-width: 400px;")
          .ui.raised.segment
            h2.ui.teal.image.header
              i.user.circle.icon(style="font-size: 3rem; color: #2185d0;")
              .content(style="padding-left: 10px;") 登入您的帳戶
  
            //- Google Login Button
            .ui.fluid.large.orange.button(@click.stop="loginGoogle", style="background-color: #FF6F00; color: white; font-weight: bold;")
              i.google.icon
              | 使用 Google 登入
  
            form.ui.large.form
              .ui.segment(style="border: none; padding-top: 10px;")
                .field
                  .ui.checkbox(@click.stop)
                    input(type="checkbox" v-model="keeploggedin")
                    label 維持登入狀態
  
            .ui.horizontal.divider(style="color: #bbb;") 或
  
            router-link.ui.large.purple.button(to="/about", @click.stop="toggleLogin()", style="background-color: #6a1b9a; color: white; font-weight: bold;") 關於我們
  
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
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
  
  export default defineComponent({
    name: "LoginBox",
    data() {
      return {
        keeploggedin: false,
        email: '',
        password: ''
      };
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
      loginGoogle() {
        // 現有的 Google 登入方法
      },
      toggleLogin() {
        // 現有的切換登入視窗方法
      },
      loginWithEmail() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // 登入成功
            const user = userCredential.user;
            console.log('登入成功', user);
            // 在此處進行重定向或狀態更新
          })
          .catch((error) => {
            // 登入失敗
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('登入失敗', errorCode, errorMessage);
            // 在此處向使用者顯示錯誤訊息
          });
      },
      registerWithEmail() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // 註冊成功
            const user = userCredential.user;
            console.log('註冊成功', user);
            // 在此處進行重定向或狀態更新
          })
          .catch((error) => {
            // 註冊失敗
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('註冊失敗', errorCode, errorMessage);
            // 在此處向使用者顯示錯誤訊息
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
    background-color: #ffc107 !important; /* 更亮的橘色懸停效果 */
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
  