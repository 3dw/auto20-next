<template lang="pug">
  .home
    img#main-img(src="../assets/handshake1.webp", alt="互助互惠")
    HelloWorld(:uid="uid", :users="users", :places="places", :book="book", :isInApp="isInApp", 
      @addBook="addBook", @locate="locate", @removeBook="removeBook", 
      @loginGoogle="loginGoogle", @toggleLogin="toggleLogin")
  

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      HelloWorld
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
    emits: ['addBook', 'removeBook', 'locate', 'loginGoogle', 'toggleLogin'], // Declare your custom events here
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
        console.log('b');
        this.$emit('toggleLogin'); // 切換login鈕
      }
    }
  });
  </script>
  
  <style scoped>
  img#main-img {
    width: 33vmin !important;
    border-radius: 50%;
  }
  </style>
  