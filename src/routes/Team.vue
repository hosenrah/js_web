<template lang="html">
  <div>
    <div class="team">
      <h1>TEAM</h1>
      <div class="team-container">
          <div class="member">
            <img class="u-max-full-width" src="../assets/portraits/tobi.jpg">
          </div>
          <div class="member">
            <img class="u-max-full-width" src="../assets/portraits/benni.jpg">
          </div>
          <div class="member">
            <img class="u-max-full-width" src="../assets/portraits/andy.jpg">
          </div>
      </div>
      <h1>SPONSORS</h1>
      <div class="sponsors-container">
          <div class="sponsor">
              <a href="http://madridskateboards.com/" target="_blank">
                  <img class="img" src="../assets/sponsors/Madrid.png">
              </a>
          </div>
          <div class="sponsor">
              <a href="http://www.talk-about.org/leben-ist-mehr/" target="_blank">
                  <img class="img" src="../assets/sponsors/Ichthys.png">
              </a>
          </div>
          <div class="sponsor">
              <a href="http://nitrousa.com/de" target="_blank">
                  <img class="img" src="../assets/sponsors/Nitro.png">
              </a>
          </div>
          <div class="sponsor">
              <a href="http://arborcollective.com/" target="_blank">
                  <img class="img" src="../assets/sponsors/Arbor.png">
              </a>
          </div>
          <div class="sponsor">
              <a href="http://www.sport-mueller.de/" target="_blank">
                  <img class="img" src="../assets/sponsors/SportMueller.png">
              </a>
          </div>
          <div class="sponsor">
              <a href="http://www.lecannabis.com/de/" target="_blank">
                  <img class="img" src="../assets/sponsors/LeCannabis.png">
              </a>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'videos'
  }
</script>

<style lang="scss">
  @import "../sass/vars";

  .team-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
  }
  .member {
    overflow: hidden;
    & img {
      width: 15em;
      &:hover {
        transform: scale(1.1);
        transition-duration: 140ms;
      }
    }
    @media (min-width: 1024px) {
      & img {
        width: 25em;
      }
    }
  }
  .sponsors-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
  }
  .sponsor {
    & .img {
      width: 300px;
      box-sizing: border-box;
      &:hover {
        transform: scale(1.1);
        transition-duration: 140ms;
      }
    }
  }
</style>
