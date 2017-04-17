<template lang="html">
  <div class="items">
    <div class="items--item" v-for="item in content">
      <a href="">
        <img :src="item.img" :alt="item.title">
        <h2 class="overlay-title">{{item.description.slice(0, 15) + '...'}}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="scss">
  @import "../sass/vars";

  .items {
    /* Styles for mobile view go here */
    @media (min-width: 649px) {
      width: span(6);
      @include pre(3);
    }
    /* Styles for desktop view go here */
    width: span(12);

    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .items--item {
    /* Styles for mobile view go here */
    @media (min-width: 649px) {
      width: span(6);
    }
    /* Styles for desktop view go here */
    @media (min-width: 1024px) {
      width: span(4);
    }
    & a {
      width: span(12);
      height: span(12);
      position: relative;
    }
    & img {
      width: span(12);
      height: span(12);
      object-fit: cover;
    }
    margin-bottom: gutter(12);
  }
  .overlay-title {
    /* Styles for desktop view go here */
    @media (min-width: 1024px) {
      font-size: $h3;
    }
    position: absolute;
    bottom: 13px;
    background: black;
    text-align: center;
    color: white;
    margin: 0 3%;
    z-index: 5;
    padding: 0 5px;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
  }
</style>
