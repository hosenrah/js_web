import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Team from './Team'
import Videos from './Videos'
import Photos from './Photos'
import Tutorials from './Tutorials'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: Tutorials
    }
  ]
})
