/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource)

import Home from './routes/Home';
import Team from './routes/Team';
import Videos from './routes/Videos';
import Photos from './routes/Photos';
import Sponsors from './routes/Sponsors';
import Tutorials from './routes/Tutorials';

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/videos', component: Videos },
  { path: '/photos', component: Photos },
  { path: '/sponsors', component: Sponsors },
  { path: '/tutorials', component: Tutorials },
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
