<template lang="pug">
  .ui.dimmer.modals.visible.active(style="background: rgba(0, 0, 0, 0.5);")
    .ui.middle.aligned.center.aligned.grid(style="height: 100vh;")
      .column(style="max-width: 450px;")
        .ui.segment
          h2.ui.teal.image.header
            .content Login to your account
          
          //- Google Login Button
          .ui.fluid.large.orange.button(@click="loginGoogle")
            i.google.icon
            | Login with Google

          .ui.horizontal.divider Or

          //- Email & Password Login Form
          form.ui.large.form
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
                  label Remember Me
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
      this.$emit('loginGoogle', true);
    }
  }
});
</script>

<style scoped>
.column {
  border-radius: 15px;
}
.ui.segment {
  padding: 2em;
}
</style>
