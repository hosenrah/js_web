/* eslint-disable */
import Vue from 'vue';
import App from './App'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './routes'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
