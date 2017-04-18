<template lang="html">
  <div class="video-banner">
    <img class="video-banner-background" src="../assets/js_logo/js_logo_white.png" alt="">
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
    width: 70em;
    position: relative;
    margin: 0 auto;
    height: 70em / 16 * 9;
    overflow: hidden;
    margin-bottom: gutter(12);
    @media (max-width: 648px) {
      display: none;
    }
  }
  .video-banner-video {
    position:absolute;
    top: -5%;
    left:-5%;
    width:110%;
    height:110%;
  }
  .video-banner-background {
    width: 80%;
    margin: 0 auto;
  }
</style>
