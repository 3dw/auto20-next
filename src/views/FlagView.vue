<template lang="pug">
  .hello
    loader(v-show="!users")
    .ui.segment.container#flag
      .ui.fluid.card(v-for="(h, index) in toList(users)" v-show="h.uid == $route.params.uid")
        card(:h="h", :full="true", :book="book", :mySearch="mySearch", @locate="locate", @addBook="addBook", @loginGoogle="loginGoogle")      
</template>

<script>

import { defineComponent } from 'vue';

import mix from '../mixins/mix.ts'
import Card from '../components/Card'
import Loader from '../components/Loader'

export default defineComponent({
  name: 'FlagView',
  components: { Card, Loader },
  mixins: [mix],props: {
    users: {
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
    },
    mySearch: {
      type: String,
      required: false,
      default: () => { 
        return ''
      }
    },
  },
  data () {
    return {
    }
  },
  computed: {
    // a computed getter
    myT() {
      if (Object.keys(this.users).length > 0 && this.$route.params.uid) {
        return this.users[this.$route.params.uid].name
      }
      // `this` points to the component instance
      return [{ name: '旗幟' }][0].name
    }
  },
  methods: {
    // eslint-disable-next-line
    toList: function (obj) {
      if (!obj || typeof(obj) !== 'object') { 
        return []
      } else {
        return Object.values(obj)
      }
    },
    locate: function (h, bool) {
      this.$emit('locate', h, bool)
    },
    addBook: function (uid) {
      console.log(uid)
      this.$emit('addBook', uid)
    },
    loginGoogle: function () {
      this.$emit('loginGoogle')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #35495E;
}

.card {
  min-height: 0;
  min-width: 300px;
  width: 82% !important;
  margin: 0 auto;
}

#flag {
  background-color: #E6E6FA; /* Lavender */;
}

</style>
