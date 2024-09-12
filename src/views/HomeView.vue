<template lang="pug">
  .home
    img#main-img(src="../assets/handshake1.webp", alt="互助互惠")
    HelloWorld(:uid="uid", :users="users", :places="places", :book="book", :isInApp="isInApp", 
      @addBook="addBook", @locate="locate", @removeBook="removeBook", 
      @loginGoogle="loginGoogle", @toggleLogin="toggleLogin")
  
    .flex.justify-center
      canvas(ref="canvas" width="400" height="400" class="w-full max-w-[400px]")
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  // import { Rive } from "@rive-app/canvas"; // 引入 Rive
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      HelloWorld
    },
    setup() {
      const canvas = ref<HTMLCanvasElement | null>(null);
  
      // 在 setup 中處理 Rive 動畫的掛載
      onMounted(() => {
        /* if (!canvas.value) {
          throw new Error("canvas not found");
        }
  
        const rive = new Rive({
          canvas: canvas.value,
          //src: "https://cdn.rive.app/animations/vehicles.riv",
          //src: "./assets/vehicles.riv",
          //src: "https://we.alearn.org.tw/vehicles.riv",
          //src: "https://we.alearn.org.tw/Area_Multiplication.riv",
          //src: "./vehicles.riv",
          autoplay: true,
          onLoad: () => {
            rive.resizeDrawingSurfaceToCanvas();
          },
        }); */
      });
  
      return {
        canvas, // 綁定 canvas 到模板
      };
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
  .flex.justify-center {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  canvas {
    width: 100%;
    max-width: 400px;
  }
  </style>
  