<template>
  <div class='app'>
    <header class="header" :class="{toggleNav : toggleNav}">
      <img class="header--logo" src="./assets/js_logo/js_logo_black_nav.png" alt="">
      <div class="header--burger" @click="toggleNav = !toggleNav"></div>
      <section class='navigation'>
        <router-link class='navigation__element' to="/" @click.native="$scrollToTop; toggleNav = false;">
          <h3 class="navigation--link">Home</h3>
        </router-link>
        <router-link class='navigation__element' to="/team" @click.native="$scrollToTop; toggleNav = false;">
          <h3 class="navigation--link">Team</h3>
        </router-link>
        <router-link class='navigation__element' to="/videos" @click.native="$scrollToTop; toggleNav = false;">
          <h3 class="navigation--link">Videos</h3>
        </router-link>
        <router-link class='navigation__element' to="/photos" @click.native="$scrollToTop; toggleNav = false;">
          <h3 class="navigation--link">Photos</h3>
        </router-link>
        <router-link class='navigation__element' to="/tutorials" @click.native="$scrollToTop; toggleNav = false;">
          <h3 class="navigation--link">Tutorials</h3>
        </router-link>
      </section>
    </header>
    <main>
      <router-view :vimeoVideos='vimeoVideos' :instaPosts='instaPosts' :bgVideo='bgVideo' :videos='videos' :tutorials='tutorials'></router-view>
    </main>
    <jsFooter></jsFooter>
  </div>
</template>

<script>
  import jsFooter from './components/Footer'

  export default {
    name: 'app',
    components: {
      jsFooter
    },
    data () {
      return {
        toggleNav: false,
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
  @import "./sass/vars";

  .header {
    position: relative;
    width: 100%;
    background: white;
    display: inline-block;
  }
  .header--logo {
    position: absolute;
    bottom: 0;
    @include span(5);
    padding: gutter(12);
    @media (min-width: 649px) {
      position: relative;
      @include span(1);
      margin-left: span(1);
    }
  }
  .header--burger {
    content: url("./assets/content/burger--dark.png");
    padding: 1em;
    /* Styles for desktop view go here */
    @media (min-width: 649px) {
      display: none;
    }
    @include span(1 wider last);
    @include pre(4);
  }

  /* Styles for mobile view go here */
  @media (max-width: 1023px) {
    .navigation {
      display: none;
      position: absolute;
      height: 88vh;
      top: 4.2vh;
      background: $mobile-nav-background;
      z-index: 1000;
      @include span(12);
      display: none;
      flex-flow: column nowrap;
      justify-content: space-around;
    }
    .navigation--link {
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid black;
    }
    .toggleNav {
      & > .navigation {
        display: flex;
      }
      & > .header--burger {
        content: url("./assets/content/burger--light.png");
        background: $mobile-nav-background;
      }
    }
  }
  /* Styles for desktop view go here */
  @media (min-width: 1024px) {
    .navigation {
      @include span(6);
      @include pre(3);
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    .navigation__element {
      border-bottom: 2px solid transparent;
      &:hover {
        border-bottom: 2px solid black;
      }
    }
  }
</style>
