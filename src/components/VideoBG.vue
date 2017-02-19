<template>
  <div class="videoWrapper">
    <iframe v-for="video in vimeoVideos" id="videoBG" class="videBG" frameborder="0" v-bind:src="'https://player.vimeo.com/video/' + video.uri.slice(8) + '?background=1'"></iframe>
  </div>
</template>

<script>
export default {
  name: 'videoBG',
  data () {
    return {
      vimeoVideos: []
    }
  },
  mounted: function () {
    this.$http.get(
      'https://api.vimeo.com/me/videos',
      {headers: {'Authorization': 'bearer 1bb5838a1c16bdab1e8eac3add1b6f2a'}})
    .then(response => {
      response.body.data.filter(this.filterVideos)
    }, response => {
    })
  },
  methods: {
    filterVideos: function (video) {
      if (this.vimeoVideos.length < 1 && video.name.includes('##')) {
        this.vimeoVideos.push(video)
      }
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
