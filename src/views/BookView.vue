<template lang="pug">
  .hello
    h1
      router-link(to="/cards", v-if="book && !book.length") 您的名簿目前沒有人，按此找朋友
    loader(v-show="!users")
    vue-excel-xlsx(
      :data="toArray()",
      :columns="toColumns()",
      :file-name="'auto20-mybook-export-' + today()",
      :file-type="'xlsx'",
      :sheet-name="'book'",
      class="down ui blue button") 下載資料
        | &nbsp;&nbsp;&nbsp;&nbsp;
        i.download.icon
    .ui.divider
    .ui.two.doubling.cards.container
      .ui.card(v-for="(h, index) in searchBy(places, mySearch)", :key="index" v-if="book && book.indexOf(h.idx) > -1")
        card(:h="h", :full="false",:book="book", :mySearch="mySearch", @locate="locate", @addBook="addBook", @removeBook="removeBook")
      .ui.card(v-for="(h, index) in searchBy(users, mySearch)", :key="index" v-if="book && book.indexOf(h.uid) > -1")
        card(:h="h", :full="false",:book="book", :mySearch="mySearch", @locate="locate", @addBook="addBook", @removeBook="removeBook")
    br
    br
    br
    br
    br
</template>

<script>

import mix from '../mixins/mix.js'
import Loader from '../components/Loader.vue'
import Card from '../components/Card.vue'

export default {
  name: 'BookView',
  mixins: [mix],
  props: ['mySearch', 'book', 'users', 'places'],
  components: { Loader, Card },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '名簿',
  },
  data () {
    return {
    }
  },
  methods: {
    today () {
      const t = new Date()
      return t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate()
    },
    toArray () {
      if (!this.users) {
        return []
      }
      // console.log(this.searchBy(this.users, this.mySearch))
      const likes = this.searchBy(this.users, this.mySearch).filter( (u) => {
        return (this.book && (this.book.indexOf(u.uid) > -1 || this.book.indexOf(u.idx) > -1))
      })
      // console.log(likes)
      return likes
    },
    toColumns () {
      var keys
      // console.log(this.users.LHIpT3zOOWapprBLKqQtBawg2742)
      if (this.users.LHIpT3zOOWapprBLKqQtBawg2742) {
        keys = Object.keys(this.users.LIzyGte1eCa8lbOujKWViftnqGP2)
      } else {
        keys = ['test', 'test2']
      }
      const ans = keys.map(function (k) {
        return {
          label: k,
          field: k
        }
      })
      // console.log(ans)
      return ans
    },
    locate: function (h) {
      this.$emit('locate', h)
    },
    addBook: function (uid) {
      console.log(uid)
      this.$emit('addBook', uid)
    },
    removeBook: function (index) {
      console.log(index)
      this.$emit('removeBook', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #35495E;
}

</style>
