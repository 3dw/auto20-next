<template lang = "pug">
nav.ui.menu
  router-link.item(to="/") Home
  router-link.item(to="/about") About
  .right.menu
    router-link.item(to="/profile") profile
    button.no-border.ui.item(v-if="uid", @click="logout") logout
router-view(:uid="uid", :users="users", :user="user", :email="email", :photoURL="photoURL", @loginGoogle="loginGoogle")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InApp from 'detect-inapp';
import { onValue } from 'firebase/database';
import { app, usersRef, placesRef, groupsRef } from './firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const inApp = new InApp(window.navigator.userAgent);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')


export default defineComponent({
  name: 'WeLearn',
  data () {
    return {
      users: null as any,
      user: null as any,
      email: null as string | null,
      uid: null as string | null,
      photoURL: null as string | null,
      isInApp: inApp.isInApp,
      groups: null as [string] | null,
      places: null as [string] | null,
    }
  },
  mounted () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this
    console.log(vm.isInApp)
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val()
      // console.log(data)
      vm.users = data
    })
    onValue(placesRef, (snapshot) => {
      const data = snapshot.val()
      // console.log(data)
      vm.places = data
    })
    onValue(groupsRef, (snapshot) => {
      const data = snapshot.val()
      // console.log(data)
      vm.groups = data
    })
    // console.log(this.$localStorage.get(n))
    if (localStorage.getItem('book')) {
    //  this.getLocal('book')
    }
  },
  watch: {
    $route (to, from) {
      console.log(from.path)
      console.log(to.path)
      /* this.$gtag.event('action', {
        event_category: 'navigate',
        event_action: 'from:' + from.path + ' to:' + to.path,
        event_label: 'from:' + from.path + ' to:' + to.path,
        value: 'from:' + from.path + ' to:' + to.path
      }) */
    }
  },
  methods: {
    /* getLocal: function (n: string) {
      const item = localStorage.getItem(n);
      if (item) {
        this[n] = JSON.parse(item);
      } else {
        console.log(`No local storage item found for key: ${n}`);
      }
    }, */
    logout () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this
      auth.signOut().then(function() {
        vm.user = null
        vm.uid = null
        vm.photoURL = ''
        console.log(vm.$router);
        vm.$router.push('/');
      })
    },
    loginGoogle: function () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this
      if (this.isInApp) {
        window.alert('本系統不支援facebook, link等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝')
      } else {
        // signInWithRedirect(auth, provider)
        signInWithPopup(auth, provider).then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = (credential || {}).accessToken
          // The signed-in user info.
          const user = result.user
          vm.user = user
          vm.email = user.providerData[0].email
          // vm.token = token
          vm.uid = user.uid
          if (user.photoURL) {
            vm.photoURL = decodeURI(user.photoURL);
          } else {
            vm.photoURL = null; // or set a default value if necessary
          }
          if (vm.uid && vm.users[vm.uid]) {
            vm.user = vm.users[vm.uid]
          }
        })
      }
    }
  }
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-color: #42b983 !important;
}

button.no-border {
  border: none;
}




</style>
