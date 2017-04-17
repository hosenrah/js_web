<template lang="html">
  <div>
    <jsHeader></jsHeader>
    <div class="wrap">
      <div class="wrap--vimeo">
        <jsDynamicContent :content="instaPosts.slice(0, 12)"></jsDynamicContent>
      </div>
    </div>
    <jsFooter></jsFooter>
  </div>
</template>

<script>
  import jsHeader from '../components/Header'
  import titleVideo from '../components/TitleVideo'
  import jsContent from '../components/Content'
  import jsDynamicContent from '../components/DynamicContent'
  import jsFooter from '../components/Footer'

  export default {
    name: 'videos',
    components: {
      jsHeader,
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
        // this.vimeoVideos = response.body.data
        let vimeoVideos = response.body.data
        this.vimeoVideos = vimeoVideos.map(this.mapVimeoProperties)
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
      },
      mapVimeoProperties: function (post) {
        let newPost = {
          img: post.pictures.sizes[5].link_with_play_button,
          link: post.uri,
          name: post.name,
          date: new Date(parseInt(post.created_time) * 1000)
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

  .wrap--vimeo {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .wrap--instagram-title {
    text-align: center;
  }

</style>
