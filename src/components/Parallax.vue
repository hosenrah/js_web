<template>
  <div class="parallax">
    <div id="group1" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
        <videoBG></videoBG>
      </div>
    </div>
    <div id="group2" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
        <sponsors></sponsors>
      </div>
      <div class="parallax__layer parallax__layer--back">
      </div>
    </div>
    <div id="group3" class="parallax__group">
      <div class="parallax__layer parallax__layer--fore">
        <team></team>
      </div>
      <div class="parallax__layer parallax__layer--base">
      </div>
    </div>
    <div id="group4" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
        <instagram></instagram>
      </div>
      <div class="parallax__layer parallax__layer--back">
      </div>
    </div>
    <div id="group5" class="parallax__group">
      <div class="parallax__layer parallax__layer--fore">
        <videos></videos>
      </div>
      <div class="parallax__layer parallax__layer--base">
      </div>
    </div>
    <div id="group6" class="parallax__group">
      <div class="parallax__layer parallax__layer--back">
      </div>
      <div class="parallax__layer parallax__layer--base">
        <tutorials></tutorials>
      </div>
    </div>
    <div id="group7" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
      </div>
    </div>
  </div>
</template>

<script>
import VideoBG from './VideoBG'
import Sponsors from './Sponsors'
import Team from './Team'
import Videos from './Videos'
import Instagram from './Instagram'
import Tutorials from './Tutorials'

export default {
  name: 'parallax',
  components: {
    VideoBG,
    Sponsors,
    Team,
    Videos,
    Instagram,
    Tutorials
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /* Parallax base styles, credit goes to
  http://keithclark.co.uk/articles/pure-css-parallax-websites/
  --------------------------------------------- */

  .parallax {
    height: 500px; /* fallback for older browsers */
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-perspective: 300px;
    perspective: 300px;
    -webkit-perspective-origin-x: 100%;
    perspective-origin-x: 100%;
  }



  .parallax__group {
    position: relative;
    height: 500px; /* fallback for older browsers */
    height: 100vh;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform-origin-x: 100%;
    transform-origin-x: 100%;
  }

  .parallax__layer--fore {
    -webkit-transform: translateZ(90px) scale(.7);
    transform: translateZ(90px) scale(.7);
    z-index: 1;
  }

  .parallax__layer--base {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 4;
  }

  .parallax__layer--back {
    -webkit-transform: translateZ(-300px) scale(2);
    transform: translateZ(-300px) scale(2);
    z-index: 3;
  }

  .parallax__layer--deep {
    -webkit-transform: translateZ(-600px) scale(3);
    transform: translateZ(-600px) scale(3);
    z-index: 2;
  }


  /* demo styles
  --------------------------------------------- */

  .parallax {
    font-size: 200%;
  }

   /* centre the content in the parallax layers */
  .title {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  /* style the groups
  --------------------------------------------- */

  #group1 {
    z-index: 5; /* slide over group 2 */
  }
  #group1 .parallax__layer--base {
    background: rgb(102,204,102);
  }

  #group2 {
    z-index: 3; /* slide under groups 1 and 3 */
  }
  #group2 .parallax__layer--back {
    background: rgb(123,210,102);
    background-image: url(../assets/parallax/bomb.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  #group3 {
    z-index: 4; /* slide over group 2 and 4 */
  }
  #group3 .parallax__layer--base {
    background: rgb(153,216,101);
    background-repeat: no-repeat;
    background-size: cover;
  }

  #group4 {
    z-index: 2; /* slide under group 3 and 5 */
  }
  #group4 .parallax__layer--back {
    background: rgb(184,223,101);
    background-image: url(../assets/parallax/station.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  #group5 {
    z-index: 3; /* slide over group 4 and 6 */
  }
  #group5 .parallax__layer--base {
    background: rgb(214,229,100);
  }

  #group6 {
    z-index: 2; /* slide under group 5 and 7 */
  }
  #group6 .parallax__layer--back {
    background: rgb(245,235,100);
    background-image: url(../assets/parallax/shop.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  #group7 {
    z-index: 3; /* slide over group 7 */
  }
  #group7 .parallax__layer--base {
    background: rgb(255,241,100);
    background-image: url(../assets/parallax/mountains.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
