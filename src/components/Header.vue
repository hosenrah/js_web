<template lang="html">
  <div class="header" :class="{toggleNav : toggleNav}">
    <img class="header--logo" src="../assets/js_logo/js_logo_black_nav.png" alt="">
    <div class="header--burger" @click="toggleNav = !toggleNav"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleNav: false
    }
  }
}
</script>

<style lang="scss">
  @import "../sass/vars";

  .header {
    position: relative;
    width: 100%;
    background: white;
    display: inline-block;
  }
  .toggleNav {
    & + .wrap > .navigation {
      display: block;
    }
    & > .header--burger {
      content: url("../assets/content/burger--light.png");
      background: grey;
    }
  }
  .header--logo {
    position: absolute;
    bottom: 0;
    @include span(5);
    padding: gutter(12);
    @media (min-width: 649px) {
      @include span(1);
      margin-left: span(1);
    }
  }
  .header--burger {
    content: url("../assets/content/burger--dark.png");
    padding: 1em;
    /* Styles for desktop view go here */
    @media (min-width: 649px) {
      display: none;
    }
    @include span(1 wider last);
    @include pre(4);
  }
</style>
