<template lang="pug">
.hello
  h4.ui.header 聞道有先後，術業有專攻
  //h4.ui.header 請先登入，升起互助旗，和
    span {{ toList(users).length > 0 ? toList(users).length : '各' }}
    | 各位朋友相互認識
br
.ui.huge.buttons
  router-link(to="/about").ui.purple.button 瞭解更多
  .or
  router-link.ui.basic.orange.button(to="/profile", v-if="!user || !user.uid", :class="{disabled: isInApp}")
    // i.google.icon
    | 登入
  router-link.ui.blue.button(to="/profile", v-else)
    | 前往我的旗幟
.ui.divider
p(v-if="isInApp") 本系統不支援facebook, link等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝
  .ui.divider
select.ui.dropdown(v-show="users && toList(users).length > 0", v-model="logic" )
  option(value="random") 隨機介紹
  option(value="newest") 最近更新
br
br
.ui.four.doubling.stackable.cards.container(v-if="toList(users).length > 0")
  .ui.card(v-for="(h, index) in ordered_list.slice(0, 4)", :key="index")
    card(:h="h", :full="false", :mySearch="mySearch", :uid="uid", :book="book", @locate="locate", @addBook="addBook", @removeBook="removeBook", @loginGoogle="loginGoogle")
loader(v-else)

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue';
import Loader from './Loader.vue';

interface UserOrPlace {
  lastUpdate?: number;
  [key: string]: any;
}

export default defineComponent({
  name: 'HelloWorld',
  components: { Card, Loader },
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
    },
  },
  data() {
    return {
      logic: 'random',
      shuffledList: [] as UserOrPlace[],
      newestList: [] as UserOrPlace[]
    };
  },
  emits: ['addBook', 'removeBook', 'locate', 'loginGoogle'], // Declare your custom events here
  computed: {
    ordered_list(): UserOrPlace[] { // Explicit return type
      if (this.logic === 'random') {
        return this.shuffledList;
      } else {
        return this.newestList;
      }
    }
  },
  watch: {
    logic(newVal: string) {
      if (newVal === 'random') {
        this.shuffleList();
      } else if (newVal === 'newest') {
        this.sortByNewest();
      }
    },
    users: {
      handler() {
        this.shuffleList();
        this.sortByNewest();
      },
      deep: true
    },
    places: {
      handler() {
        this.shuffleList();
        this.sortByNewest();
      },
      deep: true
    }
  },
  mounted() {
    this.shuffleList();
    this.sortByNewest();
  },
  methods: {
    toList(obj: any): UserOrPlace[] {
      if (!obj || typeof obj !== 'object') {
        return [];
      } else {
        return Object.values(obj);
      }
    },
    shuffleList() {
      const list = this.toList(this.users).concat(this.toList(this.places));
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
      this.shuffledList = list;
    },
    sortByNewest() {
      const list = this.toList(this.users).concat(this.toList(this.places)).slice().sort((a, b) => {
        if (!b.lastUpdate || isNaN(b.lastUpdate)) {
          return -1;
        }
        return (b.lastUpdate as number) - (a.lastUpdate as number);
      });
      this.newestList = list;
    },
    addBook(uid: string) {
      console.log(uid);
      this.$emit('addBook', uid);
    },
    removeBook(index: number) {
      console.log(index);
      this.$emit('removeBook', index);
    },
    locate(h: any, bool: boolean) {
      this.$emit('locate', h, bool);
    },
    loginGoogle() {
      this.$emit('loginGoogle');
    }
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
