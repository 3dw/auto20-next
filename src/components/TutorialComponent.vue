<template lang="pug">
  .tutorial
    h2 新手任務
    ul
      li(v-for="(task, index) in tasks" :key="index")
        span {{ task.name }}
        span(v-if="task.completed") ✔️
        progress(:value="task.completed ? 100 : 0" max="100")
    button(v-if="allTasksCompleted" @click="hideTutorial") 隱藏新手任務
</template>

<script>
import { db, groupsRef } from '../firebase'
import { set, get, ref, onValue, remove } from 'firebase/database'

export default {
  props: {
    uid: {
      type: String,
      required: false,
      default: ''
    },
    user: {
      type: Object,
      required: false,
      default: () => ({})
    },
    users: {
      type: Object,
      required: false,
      default: () => ({})
    },
    places: {
      type: Object,
      required: false,
      default: () => ({})
    },
    book: {
      type: Array,
      required: false,
      default: () => []
    },
    mySearch: {
      type: String,
      required: false,
      default: ''
    },
    isInApp: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isNew: true,
      tasks: [
        { name: '升起互助旗', completed: false },
        { name: '將一位夥伴加入名簿', completed: false },
        { name: '加入一個社團', completed: false },
        { name: '在社團中建立一個資源', completed: false },
      ],
      allTasksCompleted: false,
    };
  },
  watch: {
    isNew(newValue) {
      // 當 isNew 變化時，調用 completeTask(0)
      if (!newValue) {
        this.completeTask(0);
      }
    }
  },
  methods: {
    completeTask(index) {
      this.tasks[index].completed = true;
      this.checkAllTasksCompleted();
    },
    checkAllTasksCompleted() {
      this.allTasksCompleted = this.tasks.every(task => task.completed);
    },
    hideTutorial() {
      this.$emit('hideTutorial');
    },
    fetchUserData() {
      const userRef = ref(db, 'users/' + this.uid);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          this.isNew = false;
          this.root = snapshot.val();
          this.root.email = this.root.email || this.email;
          this.root.connect_me = this.root.connect_me || this.email;
          //this.root.name = this.root.name || this.user.name || this.user.providerData[0].displayName || '新朋友';
          //this.root.photoURL = this.root.photoURL || decodeURI(this.user.photoURL) || "https://we.alearn.org.tw/logo-new.png";        
          this.root.name = this.root.name || (this.user && this.user.name) || (this.user && this.user.providerData && this.user.providerData[0] ? this.user.providerData[0].displayName : '新朋友');
          this.root.photoURL = this.root.photoURL || (this.user && decodeURI(this.user.photoURL)) || "https://we.alearn.org.tw/logo-new.png";        
        } else {
          console.log("No data available for user: " + this.uid);
          this.root = {
            //name: this.user.providerData[0].displayName || '新朋友',
            name: (this.user && this.user.providerData && this.user.providerData[0] ? this.user.providerData[0].displayName : '新朋友'),
            uid: this.uid,
            email: this.email,
            connect_me: this.email,
            photoURL: this.photoURL || decodeURI(this.user.photoURL) || "https://we.alearn.org.tw/logo-new.png",
            latlngColumn: '23.5330,121.0654',
            note: ''
          };
          this.isNew = true
        }
      });
    }
  },
  mounted() {
    // 模擬任務完成（測試用）
    //setTimeout(() => this.completeTask(0), 1000);
    //setTimeout(() => this.completeTask(1), 2000);
    //setTimeout(() => this.completeTask(2), 3000);
    //setTimeout(() => this.completeTask(3), 4000);
    this.fetchUserData(); // 在組件掛載時調用 fetchUserData 來獲取使用者資料
  }
};
</script>

<style scoped>
.tutorial {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
progress {
  margin-left: 10px;
  vertical-align: middle;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
