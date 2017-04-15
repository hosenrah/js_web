<template lang="html">
  <div class="wrap">
    <jsHeader></jsHeader>
    <jsFooter></jsFooter>
  </div>
</template>

<script>
  import jsHeader from './Header'
  import jsFooter from './Footer'

  export default {
    name: 'jsWeb',
    components: {
      jsHeader,
      jsFooter
    }
  }
</script>

<style lang="scss">
  @import "../sass/vars";

  .wrap {
    @include container;
  }

</style>
