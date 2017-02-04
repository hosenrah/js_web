<template>
  <div class="instagram">
    <h1 class="border" style="">HAPPENING</h1>
    <ul class="instaPost-container">
      <li class="instaPost" v-for="p, index in instaPosts" v-if="index <= 7">
          <a v-bind:href="p.link" target="_blank">
              <div class="square" v-bind:style="{'background-image': 'url(' + p.images.standard_resolution.url + ')'}">
                  <!-- <div class="date">
                      <span class="month">{{convertToDate(p.caption.created_time) | date: "MMM"}}</span>
                      <span >{{convertToDate(p.caption.created_time) | date: "d"}}</span>
                  </div> -->
              </div>
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'instagram',
  data () {
    return {
      instaPosts: []
    }
  },
  mounted: function () {
    this.$http.jsonp(
      'https://api.instagram.com/v1/users/self/media/recent/?access_token=2235700352.4ee6f6e.b902f5c21acc4655a71b7043b21cdcfc')
    .then(response => {
      console.log(JSON.parse(JSON.stringify(response.data.data)))
      this.instaPosts = JSON.parse(JSON.stringify(response.data.data))
    }, response => {
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .instaPost-container {
    list-style: none;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .instaPost {
      width: 20rem;
      height: 20rem;
      margin-left: 1.66%;
      margin-right: 1.66%;
      margin-bottom: 8.3%;
  }

.square {
  width: 20rem;
  height: 20rem;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
