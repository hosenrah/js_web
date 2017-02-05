<template>
  <div class="team">
    <h1 class="border" style="">TEAM</h1>
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
  </div>
</template>

<script>
export default {
  name: 'team',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .team-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
  }
  .member {
    & img {
      width: 15em;
    }
  }
</style>
