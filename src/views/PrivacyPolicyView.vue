<template>
  <div class="privacy-policy">
    <h1>隱私權政策</h1>
    <p>
      歡迎您使用我們的服務！我們非常重視您的隱私權保護，特此說明本平台的互助旗內容是完全公開的。使用本服務時，請您謹慎考慮哪些資訊是您願意公開於網路上。
    </p>
    <p>
      我們鼓勵您只分享您願意讓他人知道的信息。為了保護您的個人隱私，請不要在互助旗上放置任何敏感或個人身份信息。
    </p>
    <p>
      為了您的資料安全，本平台提供了資料下載備份的選項。您可以隨時下載您的互助旗資料，以便於自行管理和備份。
    </p>
    <button @click="downloadBackup" v-if="user && user.uid">下載我的備份</button>
    <button @click="loginGoogle" v-else>
      <i class = "google icon"/> 登入
    </button>
  </div>
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
</style>
