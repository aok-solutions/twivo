import Vue from 'vue'
import App from './components/App.vue'
import Login from './components/Login.vue'
import Feed from './components/Feed.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: 'feed', component: Feed }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
