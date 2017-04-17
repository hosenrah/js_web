<template>
  <div id="app">
    <router-link to="/foo">Go back</router-link>
    <jsWeb></jsWeb>
  </div>
</template>

<script>
import jsWeb from './components/jsWeb'

export default {
  name: 'app',
  components: {
    jsWeb
  }
}
</script>
