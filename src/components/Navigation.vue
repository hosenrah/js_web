<template lang="html">
  <div class="navigation">
    <router-link to="/team"><h3 class="navigation--link">Team</h3></router-link>
    <router-link to="/videos"><h3 class="navigation--link">Videos</h3></router-link>
    <router-link to="/photos"><h3 class="navigation--link">Photos</h3></router-link>
    <router-link to="/sponsors"><h3 class="navigation--link">Sponsors</h3></router-link>
    <router-link to="/tutorials"><h3 class="navigation--link">Tutorials</h3></router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../sass/vars";

  /* Styles for mobile view go here */
  @media (max-width: 1023px) {
    .navigation {
      display: none;
      position: absolute;
      height: 88vh;
      top: 12vh;
      background: $mobile-nav-background;
      z-index: 1000;
      @include span(12);
      display: none;
      flex-flow: column nowrap;
      justify-content: space-around;
    }
    .navigation--link {
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid black;
    }
    .toggleNav {
      & > .navigation {
        display: flex;
      }
      & > .header--burger {
        content: url("../assets/content/burger--light.png");
        background: $mobile-nav-background;
      }
    }
  }
  /* Styles for desktop view go here */
  @media (min-width: 1024px) {
    .navigation {
      @include span(6);
      @include pre(3);
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
  }

</style>
