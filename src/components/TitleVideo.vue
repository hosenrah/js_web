<template lang="html">
  <div class="video-banner">
    <iframe v-if="bgVideo" class="video-banner-video" frameborder="0" v-bind:src="'https://player.vimeo.com/video/' + bgVideo.uri.slice(8) + '?background=1'"></iframe>
  </div>
</template>

<script>
export default {
  props: ['bgVideo']
}
</script>

<style lang="scss">
  @import "../sass/vars";

  .video-banner {
    display: none;
    width: 95vw;
    height: 95vw / 16 * 9;
    @media (min-width: 1024px) {
      width: 1024px;
      height: 1024px / 16 * 9;
      display: block;
    }
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: gutter(12);
  }
  .video-banner-video {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
</style>
