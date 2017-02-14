<template>
  <div class="videos">
    <h1 class="border" style="">VIDEOS</h1>
    <ul class="videos-container">
      <li class="video" v-for="video in vimeoVideos">
        <iframe v-bind:src="'https://player.vimeo.com/video/' + video.uri.slice(8) + '?badge=1&autopause=1&player_id=0'" width="1600" height="900" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'videos',
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
      if (this.vimeoVideos.length <= 5 && video.name.includes('#')) {
        this.vimeoVideos.push(video)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .videos-container {
    list-style: none;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .video {
    & iframe {
      width: 30rem;
      height: 30rem / 16 * 9;
    }
  }
</style>
