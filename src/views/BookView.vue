<template lang="pug">
.hello
  h1
    router-link(v-if="book && uid && book.length == 0", to="/friends") 您的名簿目前沒有人，按此找朋友
  loader(v-show="!users")
  .ui.divider

  table.ui.celled.striped.collapsing.table
    thead
      tr
        th
        th 有空時段
    tbody
      tr(
          v-for="(h, index) in searchBy(users, mySearch)",
          :key="index",
          :class="{invisible: !book || !h || book.indexOf(h.uid) == -1}"
          v-show="book && h && book.indexOf(h.uid) > -1"
        )
        td
          router-link(:to="'/flag/' + h.uid")
            img.ui.avatar(:src="h.photoURL")
            span {{h.name}}
        td
          span {{h.freetime}}
      tr(
        v-for="(h, index) in searchBy(places, mySearch)",
        :key="index",
          :class="{invisible: !book || !h || book.indexOf(h.uid) == -1}",
        v-show="book && book.indexOf(h.uid) > -1"
      )
        td
          router-link(:to="'/flag/' + h.idx") {{h.name}}
        td
          span {{h.freetime}}
      
  //.ui.four.doubling.cards.container(v-if="toList(places).length > 0 && toList(users).length > 0")
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

table {
  display: inline-table;
  margin: 0 auto;
}

a {
  color: #3549FE !important;
  font-weight: bold;
  font-size: 22px;
}

img.ui.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

td {
  font-size: 20px;
}

.invisible {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  max-height: 0 !important;
}

@media only screen and (max-width: 767px) {
  .ui.table:not(.unstackable) tr.invisible, .ui.table:not(.unstackable) tr.invisible>td, .ui.table:not(.unstackable) tr.invisible>th {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    max-height: 0 !important;
  }
}
</style>
