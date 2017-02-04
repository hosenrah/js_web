// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'bearer 1bb5838a1c16bdab1e8eac3add1b6f2a')
  request.headers.set('Accept', 'application/json')
  next()
})

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
