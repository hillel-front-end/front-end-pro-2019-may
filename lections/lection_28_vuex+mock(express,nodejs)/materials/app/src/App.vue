<template>
  <div id="app">
    <Flag />

    <hr />

    App: {{parentName}}
  </div>
</template>

<script>
import Flag from './components/Flag';

export default {
  computed: {
    parentName() {
      return this.$store.state.name;
    }
  },
  components: {
    Flag
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
