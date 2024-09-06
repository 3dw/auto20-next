<template lang="pug">
.home
  //.rive-container
    // 使用正確的路徑載入 Rive 動畫檔案
    //RiveComponent(:animationFile="new URL('@/assets/face_tracking.riv', import.meta.url).href")
    //RiveComponent(:animationFile="require('@/assets/face_tracking.riv')")
  RiveComponent(:animationFile="animationFile") <!-- 使用 script 中的變數 -->

  img#main-img(src="../assets/handshake1.webp", alt="互助互惠")
  HelloWorld(:uid="uid", :users = "users", :places = "places", :book="book", :isInApp="isInApp", @addBook="addBook", @locate="locate", @removeBook="removeBook", @loginGoogle="loginGoogle")

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import RiveComponent from '@/components/RiveComponent.vue'; // 導入 RiveComponent

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    RiveComponent // 在這裡註冊 RiveComponent
  },
  setup() {
    // 在 setup 中處理 `import.meta.url`
    const animationFile = new URL('face_tracking.riv', import.meta.url).href;

    return {
      animationFile
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
      this.$emit('loginGoogle', true) //autoredirect
    }
  }
});
</script>

<style type="text/css" scoped>
img#main-img {
  width: 33vmin !important;
  border-radius: 50%;
}
.rive-container {
  width: 100%;
  height: 300px; /* 根據需求調整 */
}
</style>
