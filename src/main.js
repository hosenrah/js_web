/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource)

import App from './App';
import Foo from './Foo';

const routes = [
  { path: '/', component: App },
  { path: '/foo', component: Foo },
];

Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
});
