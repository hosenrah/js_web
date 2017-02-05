<template>
  <div class="menu-container">
    <a class="js-logo" href="#group1"></a>
    <div class="menu-items">
      <div class="item">
        <a href="#group2">Sponsors</a>
      </div>
      <div class="item">
        <a href="#group3">Team</a>
      </div>
      <div class="item">
        <a href="#group4">Happening</a>
      </div>
      <div class="item">
        <a href="#group5">Videos</a>
      </div>
      <div class="item">
        <a href="#group6">Tutorials</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menu-container {
    position: absolute;
    content: "";
    width: 100%;
    height: 4em;
    background-color: white;
    z-index: 1000;
  }
  .js-logo {
    position: absolute;
    left: 1em;
    width: 7em;
    height: 100%;
    background-image: url(../assets/js_logo/js_logo_white_nav.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center !important;
    filter: invert(1);
  }
  .menu-items {
    margin-left: 6em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .item {
    margin: 1.1em 0.5em;
    a {
      color: black;
      text-transform: uppercase;
      text-decoration: none;
      &:hover {
        border-bottom: 2px solid black;
      }
    }
  }
</style>
