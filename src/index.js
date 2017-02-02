import Vue from 'vue'
import Feed from './components/Feed.vue'

export const lock = new Auth0Lock(
  'EIhU9jVy0uIxD43R7Bkp2EfgTMNJN4B3',
  'ayanga.auth0.com'
)

new Vue({
  el: '#app',
  render: h => h(Feed)
})
