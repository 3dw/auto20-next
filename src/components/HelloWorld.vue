<template lang="pug">
.hello
  h4.ui.header(v-if="!uid") {{ $t('login.hd') }}
  h4.ui.header(v-else) {{ $t('login.small_hint') }}{{ myHint }}
  
br
.ui.huge.buttons(v-show="!uid")
  button.ui.basic.orange.button(@click="toggleLogin", :class="{disabled: isInApp}")
    // i.google.icon
    | {{ $t('login.login' )}}
  .or
  router-link(to="/about").ui.blue.button {{ $t('login.lm' )}}

.ui.huge.buttons(v-show="uid")
  router-link.ui.basic.orange.button(to="/groups")
    i.object.group.outline.icon.no-float
    | {{ $t('login.gp') }}
  .or
  router-link(to="/book").ui.green.button
    i.book.icon.no-float
    | {{ $t('login.bk')}}



p(v-if="isInApp") 本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝

//.ui.divider
//select.ui.dropdown(v-show="users && toList(users).length > 0", v-model="logic" )
  option(value="random") 隨機介紹
  option(value="newest") 最近更新
//br
//br
//.ui.two.doubling.stackable.cards.container(v-if="toList(users).length > 0")
  .ui.card(v-for="(h, index) in ordered_list.slice(0, 2)", :key="index")
    card(:h="h", :full="false", :mySearch="mySearch", :uid="uid", :book="book", @locate="locate", @addBook="addBook", @removeBook="removeBook", @loginGoogle="loginGoogle")
loader(v-if = "uid && toList(users).length == 0")

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import mix from '../mixins/mix';
import Card from './Card.vue';
import Loader from './Loader.vue';
import { hints } from '../data/hints';

interface UserOrPlace {
  lastUpdate?: number;
  [key: string]: any;
}

export default defineComponent({
  name: 'HelloWorld',
  components: { Card, Loader },
  mixins: [mix],
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
      hints: hints,
      myHint: '地圖介面讓您能夠根據地理位置就近尋找夥伴。'
    }
  },
  emits: ['addBook', 'removeBook', 'locate', 'loginGoogle', 'toggleLogin'], // Declare your custom events here
  watch: {
  },
  mounted() {
    this.myHint = this.hints[Math.floor(Math.random()*this.hints.length)];
  },
  methods: {
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
    loginGoogle(autoredirect, keeploggedin) {
      this.$emit('loginGoogle', autoredirect, keeploggedin);
    },
    toggleLogin() {
      this.$emit('toggleLogin'); // 切換login鈕
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
