<template lang="pug">
#login-bg.ui.dimmer.modals.visible.active.clickable(style="background: rgba(0, 0, 0, 0.5);", 
  @click="toggleLogin()")
  .ui.middle.aligned.center.aligned.grid(style="height: 100vh;")
    .column(style="max-width: 450px;")
      .ui.segment
        h2.ui.teal.image.header
          .content 登入您的帳戶
        
        //- Google Login Button
        .ui.fluid.large.orange.button(@click="loginGoogle")
          i.google.icon
          | 以Google帳號登入

        // form.ui.large.form
          .ui.segment
              .field
                .ui.checkbox
                      input(type="checkbox" tabindex="0" class="hidden")
                      label 維持登入狀態

        .ui.horizontal.divider Or

        router-link.ui.large.purple.button(to="/about", @click="toggleLogin()") 瞭解更多

        //- Email & Password Login Form
        //form.ui.large.form
          .ui.stacked.segment
            .field
              .ui.left.icon.input
                i.user.icon
                input(type="text" name="email" placeholder="E-mail address")
            .field
              .ui.left.icon.input
                i.lock.icon
                input(type="password" name="password" placeholder="Password")
            .field
              .ui.checkbox
                input(type="checkbox" tabindex="0" class="hidden")
                label 維持登入狀態
            .ui.two.buttons
              .ui.fluid.large.teal.submit.button Login
              .ui.fluid.large.blue.button Sign Up
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: "LoginBox",
  methods: {
    loginGoogle: function () {
      var autoredirect = true;
      
      // 檢查當前路由是否是 '/friends' 或 '/maps'
      if (this.$route.path === '/friends' || this.$route.path === '/maps') {
        autoredirect = false;
      }
      
      // 觸發 loginGoogle 事件，並將 autoredirect 作為參數傳遞
      this.$emit('loginGoogle', autoredirect);
    },
    toggleLogin: function () {
      this.$emit('toggleLogin');
    }
  }
});

</script>

<style scoped>
#login-bg {
  position: fixed;
  z-index: 999901 !important;
}

.column {
  border-radius: 15px;
}
.ui.segment {
  padding: 2em;
}
</style>
