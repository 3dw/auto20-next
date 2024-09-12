<template lang="pug">
#login-bg.ui.dimmer.modals.visible.active.clickable(style="background: rgba(0, 0, 0, 0.5);", 
  @click="toggleLogin()")
  #login-main.ui.middle.aligned.center.aligned.grid(style="height: 100vh;")
    .column(style="max-width: 450px;")
      .ui.segment
        h2.ui.teal.image.header
          .content 登入您的帳戶
        
        //- Google Login Button
        .ui.fluid.large.orange.button(@click.stop="loginGoogle")
          i.google.icon
          | 以Google帳號登入

        form.ui.large.form
          .ui.segment
            .field
            .ui.checkbox(@click.stop)
              input(type="checkbox" v-model="keeploggedin")
              label 維持登入狀態

        .ui.horizontal.divider Or

        router-link.ui.large.purple.button(to="/about", @click.stop="toggleLogin()") 瞭解更多

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
  data () {
    return {
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

      if (this.$route.path === '/friends' || this.$route.path === '/maps' || this.$route.path === '/privacy-policy' || this.$route.path.startsWith('/flag')) {
        autoredirect = false;
      }

      this.$emit('loginGoogle', autoredirect, this.keeploggedin);
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

#login-main {
  position: relative;
  z-index: 999902 !important;
}

.column {
  border-radius: 15px;
}
.ui.segment {
  padding: 2em;
}
</style>
