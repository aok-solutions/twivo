import Vue from 'vue'
import Feed from './components/Feed.vue'

export const lock = new Auth0Lock(
  'EIhU9jVy0uIxD43R7Bkp2EfgTMNJN4B3',
  'ayanga.auth0.com',
  {
    allowedConnections: ["twitter"],
    rememberLastLogin: true,
    socialButtonStyle: "big",
    theme: {"primaryColor":"#3A99D8"},
    languageDictionary: {"title":"Twivo"}
  }
)

new Vue({
  el: '#app',
  render: h => h(Feed)
})
