<template>
  <div id="app">
    <parallax></parallax>
  </div>
</template>

<script>
import Parallax from './components/Parallax'

export default {
  name: 'app',
  components: {
    Parallax
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  margin:0;
  padding:0;
}
h1 {
  text-align: center;
}

</style>
