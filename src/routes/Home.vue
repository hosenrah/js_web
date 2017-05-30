<template lang="html">
  <div>
    <div class="wrap">
      <div class="video-banner">
        <img class="video-banner-thumbnail" src="../assets/js_logo/js_logo_black.png" alt="">
        <iframe v-if="bgVideo" class="video-banner-video" frameborder="0" v-bind:src="'https://player.vimeo.com/video/' + bgVideo.link.slice(8) + '?background=1'"></iframe>
      </div>
      <h4 class="wrap--description"><span class="wrap--description-emphasize">Just Shred – </span class="wrap--description-emphasize"> From the highest mountains to the most sketchy roads. We are a german snowboard and longboard crew and we love to shred the mountains and shoot videos.</h4>
      <section>
        <div class="items">
          <div class="items--item">
            <router-link to="/team" @click.native="$scrollToTop; toggleNav = false;">
              <img src="../assets/content/Just_Shred_Team.png" alt="team">
              <h2 class="overlay-title">Team</h2>
            </router-link>
          </div>
          <div class="items--item">
            <router-link to="/videos" @click.native="$scrollToTop; toggleNav = false;">
              <img src="../assets/content/Just_Shred_Videos.png" alt="videos">
              <h2 class="overlay-title">Videos</h2>
            </router-link>
          </div>
          <div class="items--item">
            <router-link to="/photos" @click.native="$scrollToTop; toggleNav = false;">
              <img src="../assets/content/Just_Shred_Photos.png" alt="photos">
              <h2 class="overlay-title">Photos</h2>
            </router-link>
          </div>
          <div class="items--item">
            <router-link to="/tutorials" @click.native="$scrollToTop; toggleNav = false;">
              <img src="../assets/content/Just_Shred_Tutorials.png" alt="tutorials">
              <h2 class="overlay-title">Tutorials</h2>
            </router-link>
          </div>
        </div>
      </section>
      <div class="wrap--instagram">
        <h4 class="wrap--instagram-title">Follow us on Instagram</h4>
        <jsInstagramContainer :content="instaPosts.slice(0, 3)"></jsInstagramContainer>
      </div>
    </div>
  </div>
</template>

<script>
  import jsInstagramContainer from '../components/InstagramContainer'

  export default {
    name: 'home',
    components: {
      jsInstagramContainer
    },
    props: ['bgVideo', 'instaPosts']
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
    @media (max-width: 1023px) {
      width: 30em;
      height: 30em / 16 * 9;
    }
  }
  .video-banner-video {
    position:absolute;
    top: -5%;
    left:-5%;
    width:110%;
    height:110%;
  }
  .video-banner-thumbnail {
    width: 60%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .items {
    /* Styles for mobile view go here */
    @media (min-width: 649px) {
      width: span(6);
      @include pre(3);
    }
    /* Styles for desktop view go here */
    width: span(12);

    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .items--item {
    /* Styles for mobile view go here */
    @media (min-width: 649px) {
      width: span(6);
    }
    /* Styles for desktop view go here */
    @media (min-width: 1024px) {
      width: span(4);
    }
    & img {
      width: span(12);
      height: span(12);
      object-fit: cover;
    }
    margin-bottom: gutter(12);
  }
  .overlay-title {
    /* Styles for desktop view go here */
    @media (min-width: 1024px) {
      font-size: $h3;
    }
    position: absolute;
    bottom: 13px;
    background: black;
    text-align: center;
    color: white;
    margin: 0 3%;
    z-index: 5;
    padding: 0 5px;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
  }

</style>
