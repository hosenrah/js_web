<template>
  <div class="menu-container">
    <div class="menu-items">
      <div class="item">
        <a class="js-logo" href="#group1"></a>
      </div>
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
      <div class="item">
        <iframe class="fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fjstshrd%2F&width=50&layout=button_count&action=like&show_faces=true&share=true&height=46&appId" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
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

  @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2) {
      .js-logo {
        display: none;
      }
      .menu-container {
        font-size: 2rem;
      }
      .menu-items {
        justify-content: space-around;
      }
      .fb {
        display: none;
      }
  }
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
    top: 0;
    width: 7em;
    height: 100%;
    background-image: url(../assets/js_logo/js_logo_white_nav.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center !important;
    filter: invert(1);
  }
  .menu-items {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
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
    & .fb {
      border: none;
      overflow: hidden;
      width: 11em;
      height: 2em;
    }
  }
</style>
