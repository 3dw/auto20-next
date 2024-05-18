<template lang="pug">
.hello
  h1
    router-link(v-if="book && uid && book.length == 0", to="/friends") 您的名簿目前沒有人，按此找朋友
  loader(v-show="!users")
  .ui.divider
  .ui.four.doubling.cards.container(v-if="toList(places).length > 0 && toList(users).length > 0")
    .ui.card(
      v-for="(h, index) in searchBy(places, mySearch)",
      :key="index",
      v-show="book && book.indexOf(h.uid) > -1"
    )
      card(
        :h="h",
        :full="false",
        :book="book",
        :mySearch="mySearch",
        @locate="locate",
        @addBook="addBook",
        @removeBook="removeBook"
      )
    .ui.card(
      v-for="(h, index) in searchBy(users, mySearch)",
      :key="index",
      v-show="book && h && book.indexOf(h.uid) > -1"
    )
      card(
        :h="h",
        :full="false",
        :book="book",
        :mySearch="mySearch",
        @locate="locate",
        @addBook="addBook",
        @removeBook="removeBook"
      )
  br
  br
  br
  br
  br

</template>

<script>
import { defineComponent } from 'vue';
import mix from '../mixins/mix.ts';
import Loader from '../components/Loader.vue';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'BookView',
  mixins: [mix],
  props: {
    mySearch: {
      type: String,
      default: () => { return '' },
    },
    book: {
      type: Array,
      default: () => { return [] },
    },
    uid: {
      type: String,
      default: () => { return '' },
    },
    users: {
      type: Object,
      default: () => { return {} },
    },
    places: {
      type: Object,
      default: () => { return {} },
    },
  },
  components: { Loader, Card },
  metaInfo: {
    title: '名簿',
  },
  methods: {
    today() {
      const t = new Date();
      return t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate();
    },
    toList(obj) {
      if (!obj || typeof obj !== 'object') {
        return [];
      } else {
        return Object.values(obj);
      }
    },
    toArray() {
      if (!this.users) {
        return [];
      }
      const likes = this.searchBy(this.users, this.mySearch).filter((u) => {
        return this.book && (this.book.indexOf(u.uid) > -1 || this.book.indexOf(u.idx) > -1);
      });
      return likes;
    },
    toColumns() {
      let keys;
      if (this.users?.LHIpT3zOOWapprBLKqQtBawg2742) {
        keys = Object.keys(this.users?.LIzyGte1eCa8lbOujKWViftnqGP2);
      } else {
        keys = ['test', 'test2'];
      }
      const ans = keys.map((k) => ({
        label: k,
        field: k,
      }));
      return ans;
    },
    locate(h) {
      this.$emit('locate', h);
    },
    addBook(uid) {
      console.log(uid);
      this.$emit('addBook', uid);
    },
    removeBook(index) {
      console.log(index);
      this.$emit('removeBook', index);
    },
  },
});
</script>

<style scoped>
a {
  color: #35495E;
}
</style>
