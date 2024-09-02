<template lang="pug">
.hello
  .ui.segment.container 
    h2.ui.header
      i.bell.icon
      | 通知
    .ui.list
      .left.aligned.item(v-for = "(n, idx) in sortedNotifications", 
       :key="idx", v-show="!n.hidden", :class="{hidden: n.hidden}")
        | {{n.date.split('T')[0]}}：{{ n.text }} {{n.hidden}}
        .filler
        .ui.buttons
          router-link.ui.green.button(:to="n.route")
            i.eye.icon
            | 查看
          button.ui.basic.red.button(@click.prevent="hideNotification(n.nid)") 
            i.delete.icon
            | 刪除
</template>

<script>
import { defineComponent } from 'vue';
import { onValue, ref, set } from 'firebase/database';
import { db } from '../firebase'; // 導入Firebase相關配置和參考

export default defineComponent({
  name: 'NotificationsView',
  props: ['uid'],
  data() {
    return {
      notifications: {}
    };
  },
  computed: {
    sortedNotifications() {
      // 將通知按日期排序，確保最新的通知排在最上面
      return Object.values(this.notifications).map((n, idx) => { 
          n.nid = Object.keys(this.notifications)[idx]
          return n
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  },
  mounted() {
    onValue(ref(db, 'users/' + this.uid + '/notifications'), (snapshot) => {
      const data = snapshot.val() || {};
      this.notifications = data;
    });
  },
  methods: {
    hideNotification(nid) {
      const notificationKey = nid;
      console.log(notificationKey)
      set(ref(db, 'users/' + this.uid + '/notifications/' + notificationKey + '/hidden'), true)
        .then(() => {
          this.notifications[notificationKey].hidden = true;
            console.log('通知已隱藏');
        })
        .catch(error => {
          console.error('隱藏通知時出錯：', error);
        });
    }
  }
});
</script>

<style scoped>

.hidden {
  display: none !important;
}

.item {
  font-size: 16px;
  width: 100%;
  padding-bottom: 1.2em !important;
}
</style>
