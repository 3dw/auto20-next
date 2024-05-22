<template lang="pug">
.div.privacy-policy
  h1 隱私權政策
  p 歡迎您使用我們的服務！我們非常重視您的隱私權保護，特此說明自學2.0(以下簡稱本平台)的互助旗內容是完全公開的。程式並會需要您的Email以登錄，請選擇您方便公開的Email。
  P 使用本服務時，請您謹慎考慮哪些資訊是您願意公開於網路上。我們鼓勵您只分享您願意讓他人知道的資訊。
  P 
    b 為了保護您的個人隱私，請不要在互助旗上放置任何敏感或過於完整的個人身份資訊。
  p 為了您的資料安全，本平台提供了資料下載備份的選項。您可以隨時下載您的互助旗資料，以便於自行管理和備份。您也可以在登入後刪除您自己的旗幟。
  h2 創用授權
  p
    img(src="../assets/Cc_by-nd_icon.svg.png" alt="CC-BY-ND Icon")
  p 您於本平台上的互助旗，均以創用授權CC-BY-ND公開於網路。這意味著您授權他人自由分享和傳播您的內容，但不得對其進行修改，並且必須給予適當的署名。
  h2 CC-BY-ND授權條款的詳細說明
  p CC-BY-ND（署名-禁止演繹）是一種創作共用授權條款，允許他人以任何形式和任何目的再利用您的作品，但有兩個條件：
  ul
    li
      strong 署名（BY）：
      | 使用您的作品時，必須給予您適當的署名，提供作品的名稱，並指出是否對作品進行了修改。具體的署名方式可以由您自行決定。
    li
      strong 禁止演繹（ND）：
      | 使用者不能對您的作品進行任何修改，改編或以其他方式創作衍生作品。
  p 這意味著他人可以自由分享您的作品，但必須保持作品的完整性，並且必須按照您指定的方式進行署名。
  h2 數據安全和下載備份
  p 我們提供資料下載備份的選項，讓您可以隨時下載並管理您的互助旗資料。請定期下載備份，以確保您的資料安全。
  h2 管理員權利
  p 若遇到特殊情況，例如用戶兩年以及未更新旗幟或是出現明顯冒犯性語言等問題，自學2.0管理員保有移除互助旗之權利，但管理員仍需遵守創用授權，不得局部修改用戶之互助旗。
  h2 聯絡我們
  p 如果您對於隱私權政策有任何疑問或建議，請隨時聯絡我們。管理員聯絡方式如下：
  ul
    li 電子郵件：
      a(href="mailto:bestian@gmail.com") bestian@gmail.com
  button(@click="downloadBackup" v-if="user && user.uid") 下載我的備份
  button(@click="loginGoogle" v-else)
    i.google.icon
    | 登入以下載備份
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
