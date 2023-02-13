<template>
  <nav-bar />
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

body {
  // TODO
  //min-width: ;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav-bar {
  z-index: 99;
}
</style>
