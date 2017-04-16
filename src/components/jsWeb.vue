<template lang="html">
  <div>
    <jsHeader></jsHeader>
    <div class="wrap">
      <jsNavigation></jsNavigation>
      <titleVideo></titleVideo>
      <h4 class="wrap--description"><span class="wrap--description-emphasize">Just Shred – </span class="wrap--description-emphasize"> From the highest mountains to the most sketchy roads. We are a german snowboard and longboard crew and we love to shred the mountains and shoot videos.</h4>
      <jsContent></jsContent>
    </div>
    <jsFooter></jsFooter>
  </div>
</template>

<script>
  import jsHeader from './Header'
  import jsNavigation from './Navigation'
  import titleVideo from './TitleVideo'
  import jsContent from './Content'
  import jsFooter from './Footer'

  export default {
    name: 'jsWeb',
    components: {
      jsHeader,
      jsNavigation,
      titleVideo,
      jsContent,
      jsFooter
    }
  }
</script>

<style lang="scss">
  @import "../sass/vars";

  .wrap {
    @include container;
  }

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

</style>
