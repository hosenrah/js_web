<template lang="html">
  <div class="navigation">

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../sass/vars";

  .navigation {
    display: none;
    position: absolute;
    height: 100vh;
    background: grey;
    z-index: 1000;
    @include span(12);
  }
</style>
