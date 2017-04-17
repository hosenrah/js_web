<template lang="html">
  <ul class="instaPost-container">
    <li class="instaPost" v-for="p, index in instaPosts" v-if="index <= 2">
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
</template>

<script>
export default {
  props: ['instaPosts']

}
</script>

<style lang="scss">
  @import "../sass/vars";

  .instaPost-container {
    @include span (8 of 12);
    @include pre (2);
    list-style: none;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .instaPost {
    @include gallery(3 of 12);
    overflow: hidden;

    & .square {
      background-size: cover;
    }
  }

  .square {
  width: 20rem;
  height: 15rem;

  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  }
</style>
