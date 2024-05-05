<template lang = "pug">
nav.ui.menu
  router-link.item(to="/") Home
  router-link.item(to="/about") About
  .right.menu
    router-link.item(to="/profile") profile
router-view
</template>

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




</style>
