<template lang="html">
  <ul class="vimeo-container">
    <div class="vimeo-container--post" v-for="p in content">
        <iframe class="vimeo-container--video" v-bind:src="'https://player.vimeo.com/video/' + p.link.slice(8) + '?badge=1&autopause=1&player_id=0'" width="1600" height="900" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </ul>
</template>

<script>
export default {
  props: ['content']

}
</script>

<style lang="scss">
  @import "../sass/vars";

  .vimeo-container {
    @media (min-width: 1024px) {
      @include span (8 of 12);
      @include pre (2);
    }
    padding: 0;

    width: 100%;

    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 1em;
  }
  .vimeo-container--post {
    @media (min-width: 1024px) {
      width: 30em;
      margin: 0 auto;
      height: 30em / 16 * 9;
    }
    position: relative;
    width: 100vw;
    height: 100vw / 16 * 9;
    overflow: hidden;
    margin-bottom: gutter(12);

  }
  .vimeo-container--video {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }

</style>
