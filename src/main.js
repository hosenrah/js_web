/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource)

import Home from './routes/Home';
import Foo from './routes/Videos';

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '*', redirect: '/' },
];

Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link

const router = new VueRouter({
  routes,
  hashbang: false,
  history: true,
  linkActiveClass: 'active-class',
});

new Vue({
  el: '#app',
  router,
});
