import { db, ref, onValue } from 'firebase/database';

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

      // 使用 onValue 監聽資料變化
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          this.isNew = false;
          this.root = snapshot.val();
          this.root.email = this.root.email || this.email;
          this.root.connect_me = this.root.connect_me || this.email;
          this.root.name = this.root.name || this.user.name || (this.user.providerData && this.user.providerData[0] && this.user.providerData[0].displayName) || '新朋友';
          this.root.photoURL = this.root.photoURL || (this.user.photoURL ? decodeURI(this.user.photoURL) : (this.user.providerData && this.user.providerData[0] && this.user.providerData[0].photoURL)) || "https://we.alearn.org.tw/logo-new.png";
        } else {
          console.log("No data available for user: " + this.uid);
          this.root = {
            name: (this.user.providerData && this.user.providerData[0] && this.user.providerData[0].displayName) || '新朋友',
            uid: this.uid,
            email: this.email,
            connect_me: this.email,
            photoURL: this.photoURL || decodeURI(this.user.photoURL) || "https://we.alearn.org.tw/logo-new.png",
            latlngColumn: '23.5330,121.0654',
            note: ''
          };
          this.isNew = true;
        }
      }, (error) => {
        console.error(error);
        console.log("Error fetching data for user: " + this.uid);
        this.root = {
          name: (this.user.providerData && this.user.providerData[0] && this.user.providerData[0].displayName) || '新朋友',
          uid: this.uid,
          email: this.email,
          connect_me: this.email,
          photoURL: this.photoURL || decodeURI(this.user.photoURL) || "https://we.alearn.org.tw/logo-new.png",
          latlngColumn: '23.5330,121.0654',
          note: ''
        };
        this.isNew = true;
      });
    }
  },
  mounted() {
    this.fetchUserData(); // 在組件掛載時開始監聽使用者資料
  }
};
