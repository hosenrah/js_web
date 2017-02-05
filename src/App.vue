<template>
  <div id="app">
    <mainMenu></mainMenu>
    <parallax></parallax>
  </div>
</template>

<script>
import Parallax from './components/Parallax'
import MainMenu from './components/MainMenu'

export default {
  name: 'app',
  components: {
    Parallax,
    MainMenu
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
  margin-top: 1.5em;
}

</style>
