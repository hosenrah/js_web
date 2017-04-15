<template lang="html">
  <div class="header"></div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../sass/vars";

  .header {
    @include span(12 last);

    background: black;
    height: 5em;
    margin-bottom: gutter(12);
  }
</style>
