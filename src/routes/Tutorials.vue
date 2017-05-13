<template lang="html">
  <div class="wrap">
    <h1>Tutorials</h1>
    <div class="wrap--vimeo">
      <jsVimeoContainer :content="tutorials.slice(0, 3)"></jsVimeoContainer>
    </div>
  </div>
</template>

<script>
  import jsVimeoContainer from '../components/VimeoContainer'

  export default {
    name: 'tutorials',
    components: {
      jsVimeoContainer
    },
    props: ['tutorials']
  }
</script>

<style lang="scss">
  @import "../sass/vars";

</style>
