<template lang="pug">
  .hello
    .ui.row(v-if="!users || toList(users).length == 0")
      .sixteen.wide.column 
        .ui.huge.buttons
          button.ui.orange.button(@click="toggleLogin")
            // i.google.icon
            | {{ $t('login.login_to_see_data') }}
    .ui.segment.container#flag(v-if="users && toList(users).length > 0")
      .ui.fluid.card(v-for="(h, index) in toList(users)", v-show="h.uid == $route.params.uid")
        card(v-if="h.uid == $route.params.uid", :h="h", :clickable="false", :full="true", :book="book", :mySearch="mySearch", @locate="locate", @addBook="addBook", 
        @loginGoogle="loginGoogle", @toggleLogin="toggleLogin")
    
</template>

<script>
import { defineComponent } from 'vue';
import mix from '../mixins/mix.ts';
import Card from '../components/Card';
import Loader from '../components/Loader';

export default defineComponent({
  name: 'FlagView',
  components: { Card, Loader },
  mixins: [mix],
  props: {
    users: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
    book: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
    mySearch: {
      type: String,
      required: false,
      default: () => {
        return '';
      },
    },
  },
  computed: {
    myT() {
      if (Object.keys(this.users).length > 0 && this.$route.params.uid) {
        return this.users[this.$route.params.uid].name;
      }
      return [{ name: '旗幟' }][0].name;
    },
  },
  methods: {
    toList(obj) {
      if (!obj || typeof obj !== 'object') {
        return [];
      } else {
        return Object.values(obj);
      }
    },
    locate(h, bool) {
      this.$emit('locate', h, bool);
    },
    addBook(uid) {
      console.log(uid);
      this.$emit('addBook', uid);
    },
    loginGoogle(autoredirect, keeploggedin) {
      this.$emit('loginGoogle', autoredirect, keeploggedin);
    },
    toggleLogin() {
      this.$emit('toggleLogin');
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 20px auto;
  max-width: 1200px;
  padding: 20px;
}

.ui.segment.container#flag {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}

.ui.fluid.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

a {
  color: #0056b3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.card {
  min-height: 0;
  min-width: 300px;
  width: 100% !important;
  margin: 0 auto;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
