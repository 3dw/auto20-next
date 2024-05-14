<template lang="pug">
.home
  HelloWorld(:users = "users", :places = "places", :book="book", @addBook="addBook", @removeBook="removeBook")

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
  emits: ['addBook', 'removeBook', 'locate'], // Declare your custom events here
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
    locate: function (h:any) {
      this.$emit('locate', h)
    }
  }
});
</script>
