<template>
  <div class="videoWrapper">
    <iframe id="videoBG" class="videBG" frameborder="0" src="https://player.vimeo.com/video/194162945?background=1"></iframe>
  </div>
</template>

<script>
export default {
  name: 'videoBG',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .videoWrapper{
    overflow: hidden;
  }
  .videBG{
    width: 100vw;
    height: 100vw / 16 * 9;
  }
</style>
