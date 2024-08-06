<template lang="pug">
.hello
  .ui.segment.container 
    h2.ui.header
      i.bell.icon
      | 通知
    .ui.list
      router-link.item(v-for = "(n, idx) in Object.values(notifications)",
       :to="n.route") {{n.date.split('T')[0]}} {{ n.text }}
      // 待修
</template>

<script>

import { defineComponent } from 'vue';
import { onValue, set, ref } from 'firebase/database'
import { db } from '../firebase'; // 導入Firebase相關配置和參考

export default defineComponent({
  name: 'NotificationsView',
  props: ['uid'],
  data() {
    return {
      notifications: {}
    }
  },
  mounted() {
    onValue(ref(db, 'users/' + this.uid + '/notifications'), (snapshot) => {
      const data = snapshot.val() || new Object;
      this.notifications = data;
      });
  }
})

</script>

<style scoped>
</style>
