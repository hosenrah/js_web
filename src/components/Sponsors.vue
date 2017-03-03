<template>
  <div class="sponsors">
    <h1 class="border" style="">SPONSORS</h1>
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
</template>

<script>
export default {
  name: 'sponsors',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
