<template lang="pug">
.home
  img#main-img(src="../assets/handshake1.webp")
  HelloWorld(:uid="uid", :users = "users", :places = "places", :book="book", :isInApp="isInApp", @addBook="addBook", @locate="locate", @removeBook="removeBook", @loginGoogle="loginGoogle")

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
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
    },
    mySearch: {
      type: String,
      required: false,
      default: () => { 
        return ''
      }
    },
    isInApp: {
      type: Boolean,
      required: true
    }
  },
  emits: ['addBook', 'removeBook', 'locate', 'loginGoogle'], // Declare your custom events here
  methods: {
    addBook: function (uid:string) {
      console.log(uid)
      this.$emit('addBook', uid)
    },
    removeBook: function (index:number) {
      console.log(index)
      this.$emit('removeBook', index)
    },
    // eslint-disable-next-line
    locate: function (h:any, bool:Boolean) {
      this.$emit('locate', h, bool)
    },
    loginGoogle: function () {
      this.$emit('loginGoogle')
    }
  }
});
</script>

<style type="text/css" scoped>
img#main-img {
  width: 33vmin !important;
  border-radius: 50%;
}
</style>
