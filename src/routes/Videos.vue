<template lang="html">
  <div class="wrap">
    <h1>Videos</h1>
    <jsVimeoContainer :content="videos.slice(0, 9)"></jsVimeoContainer>
  </div>
</template>

<script>
  import jsVimeoContainer from '../components/VimeoContainer'

  export default {
    name: 'videos',
    components: {
      jsVimeoContainer
    },
    props: ['videos']
  }
</script>

<style lang="scss">
  @import "../sass/vars";

  .wrap {
    @include container;
  }

  .wrap--vimeo {
    @media (min-width: 1024px) {
      display: block;
    }
  }

</style>
