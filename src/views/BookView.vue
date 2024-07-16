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
      // tr(
        v-for="(h, index) in searchBy(places, mySearch)",
        :key="index",
          :class="{invisible: !book || !h || book.indexOf(h.uid) == -1}",
        v-show="book && book.indexOf(h.uid) > -1"
      //)
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
    //places: {
      type: Object,
    //  default: () => { return {} },
    //},
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
.hello {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 20px auto;
  max-width: 1200px;
  padding: 20px;
}

.ui.divider {
  margin: 20px 0;
}

table.ui.celled.striped.collapsing.table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-spacing: 0;
}

thead {
  background-color: #f9f9f9;
}

th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f1f1f1;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

a {
  color: #0056b3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img.ui.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

td span {
  font-size: 16px;
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

.ui.cards.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
}

.ui.card {
  flex: 1 1 calc(25% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.ui.card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.ui.card .content {
  padding: 20px;
}

.ui.card .content h4 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.ui.card .content p {
  margin: 0;
  font-size: 16px;
  color: #666;
}
</style>