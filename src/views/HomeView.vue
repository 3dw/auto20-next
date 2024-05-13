<template lang="pug">
.home
  HelloWorld(:users = "users", :places = "places")

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
    }
  }
});
</script>
