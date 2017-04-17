<template lang="html">
  <div>
    <jsHeader></jsHeader>
    <div class="wrap">
      <jsNavigation></jsNavigation>
      <titleVideo :bgVideo="bgVideo"></titleVideo>
      <h4 class="wrap--description"><span class="wrap--description-emphasize">Just Shred – </span class="wrap--description-emphasize"> From the highest mountains to the most sketchy roads. We are a german snowboard and longboard crew and we love to shred the mountains and shoot videos.</h4>
      <jsContent></jsContent>
      <div class="wrap--instagram">
        <h4 class="wrap--instagram-title">Follow us on Instagram</h4>
        <jsDynamicContent :content="instaPosts.slice(0, 3)"></jsDynamicContent>
      </div>
    </div>
    <jsFooter></jsFooter>
  </div>
</template>

<script>
  import jsHeader from './Header'
  import jsNavigation from './Navigation'
  import titleVideo from './TitleVideo'
  import jsContent from './Content'
  import jsDynamicContent from './DynamicContent'
  import jsFooter from './Footer'

  export default {
    name: 'jsWeb',
    components: {
      jsHeader,
      jsNavigation,
      titleVideo,
      jsContent,
      jsDynamicContent,
      jsFooter
    },
    data () {
      return {
        vimeoVideos: [],
        instaPosts: []
      }
    },
    mounted: function () {
      this.$http.get(
        'https://api.vimeo.com/me/videos',
        {headers: {'Authorization': 'bearer 1bb5838a1c16bdab1e8eac3add1b6f2a'}})
      .then(response => {
        this.vimeoVideos = response.body.data
      }, response => {
      })
      this.$http.jsonp(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=2235700352.4ee6f6e.b902f5c21acc4655a71b7043b21cdcfc')
      .then(response => {
        let instaPosts = JSON.parse(JSON.stringify(response.data.data))
        this.instaPosts = instaPosts.map(this.mapInstagramProperties)
      }, response => {
      })
    },
    computed: {
      bgVideo: function (video) {
        return this.vimeoVideos.find(video => video.name.includes('##'))
      },
      videos: function (video) {
        return this.vimeoVideos.filter(video => video.name.includes('#'))
      },
      tutorials: function (video) {
        return this.vimeoVideos.filter(video => video.name.includes('$'))
      }
    },
    methods: {
      mapInstagramProperties: function (post) {
        let newPost = {
          img: post.images.thumbnail.url.replace('s150x150', 's320x320'),
          link: post.link,
          description: post.caption.text,
          date: new Date(parseInt(post.created_time) * 1000),
          likes: post.likes.count
        }
        return newPost
      }
    }
  }
</script>

<style lang="scss">
  @import "../sass/vars";

  .wrap {
    @include container;
  }

  .wrap--description {
    @include span(11 of 13);
    @include pre(1 of 13);
    @media (min-width: 1024px) {
      @include span(7 of 13);
      @include pre(3 of 13);
    }
  }

  .wrap--description-emphasize {
    font-size: 30px;
    display: none;
    @media (min-width: 1024px) {
      display: inline-block;
    }
  }

  .wrap--instagram {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .wrap--instagram-title {
    text-align: center;
  }

</style>
