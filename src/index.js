import Vue from 'vue'
import Feed from './components/Feed.vue'

export const lock = new Auth0Lock(
  AUTH0_CLIENT_ID, AUTH0_DOMAIN,
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
