<template lang="pug">
.div.privacy-policy
  h1 {{$t('privacy.title')}}
  p {{ $t('privacy.content1') }}
  P {{ $t('privacy.content2') }}
  P 
    b {{$t('privacy.strong')}}
  p {{ $t('privacy.content3') }}
  h2 {{$t('privacy.cc_is')}}
  p
    img(src="../assets/Cc_by-nd_icon.svg.png" alt="CC-BY-ND Icon")
  p {{ $t('privacy.cc_content1') }}
  h2 {{ $t('privacy.cc_content2') }}
  p {{$t('privacy.cc_content3')}}
  ul
    li
      strong {{ $t('privacy.cc_by_is')}}
      | {{ $t('privacy.cc_content4') }}
    li
      strong {{$t('privacy.cc_nd_is')}}
      | {{$t('privacy.cc_content5')}}
  p {{$t('privacy.cc_content6')}}
  h2 {{$t('privacy.security_download_is')}}
  p {{$t('privacy.security_download_content1')}}
  h2 {{$t('privacy.manager_right_is')}}
  p {{$t('privacy.manage_content1')}}
  h2 {{$t('privacy.contactus')}}
  p {{$t('privacy.contact_manager')}}
  ul
    li {{$t('login.em')}}
      a(href="mailto:bestian@gmail.com") bestian@gmail.com
  button(@click="downloadBackup" v-if="user && user.uid") {{$t('privacy.download_backup')}}
  button(@click="loginGoogle" v-else)
    i.google.icon
    | {{$t('privacy.lg_downlaod_backup')}}
</template>

<script>
export default {
  name: "PrivacyPolicyView",
  props: {
    user: {
      required: false,
      default: () => { 
        return {}
      }
    }
  },
  methods: {
    downloadBackup() {
      // Example: Download user data as a JSON file
      const userData = this.user
      const blob = new Blob([JSON.stringify(userData)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "backup.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    loginGoogle () {
      this.$emit('loginGoogle')
    }
  }
};
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h1 {
  text-align: center;
}

p {
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 16px;
  text-align: left;
}

ul {
  margin-bottom: 16px;
  font-size: 16px;
  text-align: left;
}

li {
  margin-bottom: 8px;
}

button {
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

img {
  width: 62vmin !important;
  margin: 0 auto !important;
  display: block;
}
</style>
