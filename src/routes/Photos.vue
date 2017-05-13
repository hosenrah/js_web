<template lang="html">
  <div class="wrap">
    <h1>Photos</h1>
    <div class="wrap--instagram">
      <jsInstagramContainer :content="instaPosts.slice(0, 12)"></jsInstagramContainer>
    </div>
  </div>
</template>

<script>
  import jsInstagramContainer from '../components/InstagramContainer'

  export default {
    name: 'videos',
    components: {
      jsInstagramContainer
    },
    props: ['instaPosts']
  }
</script>

<style lang="scss">
  @import "../sass/vars";

  .wrap--description {
    @include span(11 of 13);
    @include pre(1 of 13);
    @media (min-width: 1024px) {
      @include span(7 of 13);
      @include pre(3 of 13);
    }
  }

  .wrap--description-emphasize {
    font-size: 30px;
    display: none;
    @media (min-width: 1024px) {
      display: inline-block;
    }
  }

  .wrap--instagram {
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .wrap--instagram-title {
    text-align: center;
  }

</style>
