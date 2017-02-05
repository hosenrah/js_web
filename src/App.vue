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
  position: relative;
  width: 8em;
  text-align: center;
  border: 0.1em solid black;
  margin: 0.5em auto;
}

</style>
