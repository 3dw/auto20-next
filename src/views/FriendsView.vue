<template lang="pug">
.hello
  loader(v-show="!users")
  .ui.divider
  .ui.two.doubling.cards.container(v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10")
    .ui.card(v-for="(h, index) in searchBy(list, mySearch).slice(0,n)", :key="index")
      card(:h="h", :full="false", :mySearch="mySearch", :id="id", :book="book", @locate="locate", @addBook="addBook", @removeBook="removeBook")
</template>

<script>

import { defineComponent } from 'vue';

import mix from '../mixins/mix.js';
import Loader from '../components/Loader.vue';
import Card from '../components/Card';

export default defineComponent({
  name: 'FrindCars',
  mixins: [mix],
  props: ['mySearch', 'id', 'book', 'users', 'places'],
  components: { Loader, Card },
  data () {
    return {
      n: 20,
      busy: false
    }
  },
  computed: {
    list: function () {
      function toList (obj) {
        const ks = Object.keys(obj)
        return ks.map(function (k) {
          return obj[k]
        })
      }
      var l = toList(this.users).concat(toList(this.places)).slice().sort(function(a,b) {
        if (!b.lastUpdate || isNaN(b.lastUpdate)) { return -1}
        return b.lastUpdate - a.lastUpdate
      })
      return l
    }
  },
  methods: {
    locate: function (h) {
      this.$emit('locate', h)
    },
    addBook: function (id) {
      console.log(id)
      this.$emit('addBook', id)
    },
    removeBook: function (index) {
      console.log(index)
      this.$emit('removeBook', index)
    },
    loadMore: function () {
      this.busy = true

      setTimeout(() => {
        this.n += 20
        this.busy = false
      }, 1)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
