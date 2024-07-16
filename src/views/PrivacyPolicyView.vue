<template lang="pug">
  .div.privacy-policy
    h1.ui.header {{$t('privacy.title')}}
    p {{ $t('privacy.content1') }}
    p {{ $t('privacy.content2') }}
    p 
      b {{$t('privacy.strong')}}
    p {{ $t('privacy.content3') }}
    h2.ui.header {{$t('privacy.cc_is')}}
    p
      img(src="../assets/Cc_by-nd_icon.svg.png" alt="CC-BY-ND Icon")
    p {{ $t('privacy.cc_content1') }}
    h2.ui.header {{ $t('privacy.cc_content2') }}
    p {{$t('privacy.cc_content3')}}
    ul
      li
        strong {{ $t('privacy.cc_by_is')}}
        | {{ $t('privacy.cc_content4') }}
      li
        strong {{$t('privacy.cc_nd_is')}}
        | {{$t('privacy.cc_content5')}}
    p {{$t('privacy.cc_content6')}}
    h2.ui.header {{$t('privacy.security_download_is')}}
    p {{$t('privacy.security_download_content1')}}
    h2.ui.header {{$t('privacy.manager_right_is')}}
    p {{$t('privacy.manage_content1')}}
    h2.ui.header {{$t('privacy.contactus')}}
    p {{$t('privacy.contact_manager')}}
    ul
      li {{$t('login.em')}}
        a(href="mailto:bestian@gmail.com") bestian@gmail.com
    button.ui.primary.button(@click="downloadBackup" v-if="user && user.uid") {{$t('privacy.download_backup')}}
    button.ui.primary.button(@click="loginGoogle" v-else)
      i.google.icon
      | {{$t('privacy.lg_download_backup')}}
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
    background-color: #f9f9f9; /* 更淺的背景色 */
    border: 1px solid #e0e0e0; /* 更淺的邊框色 */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影 */
  }
  
  h1.ui.header {
    text-align: center;
    color: #333;
    font-size: 2em;
  }
  
  h2.ui.header {
    color: #555;
    font-size: 1.5em;
    margin-top: 1.5em;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 16px;
    font-size: 1em;
    color: #555;
    text-align: left;
  }
  
  ul {
    margin-bottom: 16px;
    font-size: 1em;
    color: #555;
    text-align: left;
    padding-left: 1.5em;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  button.ui.primary.button {
    display: block;
    width: fit-content;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.ui.primary.button:hover {
    background-color: #0056b3;
  }
  
  img {
    width: 100%;
    max-width: 300px;
    margin: 20px auto;
    display: block;
    border-radius: 8px;
  }
  </style>
  