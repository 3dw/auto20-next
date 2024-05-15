<template lang="pug">
.hello
  h4.ui.header 請先登入，升起互助旗，和
    span {{ toList(users).length > 0 ? toList(users).length : '各' }}
    | 位朋友相互認識
br
.ui.huge.buttons
  router-link(to="/about").ui.purple.button 瞭解更多
  router-link.ui.orange.button(to="/profile", v-if="!user", :class="{disabled: isInApp}")
    // i.google.icon
    | 登入
  router-link.ui.blue.button(to="/profile", v-else)
    | 前往我的旗幟
.ui.divider
p(v-if="isInApp") 本系統不支援facebook, link等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝
  .ui.divider
h2(v-if="users && toList(users).length > 0") 最近更新
.ui.two.doubling.cards.container(v-if="toList(users).length > 0")
  .ui.card(v-for="(h, index) in ordered_list.slice(0, 2)", :key="index")
    card(:h="h", :full="true", :mySearch="mySearch", :uid="uid", :book="book", @locate="locate", @addBook="addBook", @removeBook="removeBook", @loginGoogle="loginGoogle")
loader(v-else)
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue';
import Loader from './Loader.vue';

interface UserOrPlace {
  lastUpdate?: number;
  // eslint-disable-next-line
  [key: string]: any; // Additional properties as needed
}

export default defineComponent({
  name: 'HelloWorld',
  components: { Card, Loader },
  props: {
    uid: {
      type: String,
      required: false,
      default: () => { 
        return ''
      }
    },
    users: {
      type: Object,
      required: false,
      default: () => { 
        return {}
      }
    },
    places: {
      type: Object,
      required: false,
      default: () => { 
        return {}
      }
    },
    book: {
      type: Array,
      required: false,
      default: () => { 
        return []
      }
    }
  },
  emits: ['addBook', 'removeBook', 'locate', 'loginGoogle'], // Declare your custom events here
  computed: {
    ordered_list(): UserOrPlace[] { // Explicit return type
      function toList(obj: Record<string, UserOrPlace> | undefined): UserOrPlace[] {
        if (!obj || typeof(obj) !== 'object') { 
          return [];
        } else {
          return Object.values(obj);
        }
      }

      const l = toList(this.users).concat(toList(this.places)).slice().sort((a, b) => {
        if (!b.lastUpdate || isNaN(b.lastUpdate)) { return -1; }
        return (b.lastUpdate as number) - (a.lastUpdate as number);
      });

      return l || [];
    }
  },
  methods: {
    // eslint-disable-next-line
    toList: (obj:any) => {
      if (!obj || typeof(obj) !== 'object') { 
        return []
      } else {
        return Object.values(obj)
      }
    },
    addBook: function (uid:string) {
      console.log(uid)
      this.$emit('addBook', uid)
    },
    removeBook: function (index:number) {
      console.log(index)
      this.$emit('removeBook', index)
    },
    // eslint-disable-next-line
    locate: function (h:any) {
      this.$emit('locate', h)
    },
    loginGoogle: function () {
      this.$emit('loginGoogle')
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
