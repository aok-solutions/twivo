<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Twivo Feed</h1>
    <div>
      <button class="btn btn-primary" @click="login()" v-show="!authenticated">Log In</button>
      <button class="btn btn-danger" @click="logout()" v-show="authenticated">Log Out</button>
    </div>

    <div class="col-sm-4" v-show="authenticated">
      <h1>{{user.screenName}}</h1>
      <img v-bind:src="user.picture">
    </div>
  </div>
</template>

<script>
  import { lock } from '../index';

  export default {
    data() {
      return {
        authenticated: false,
        lock: lock,
        user: {
          screenName: "",
          picture: ""
        }
      }
    },
    mounted(){
      this.authenticated = this.checkAuth();

      this.lock.on('authenticated', (authResult) => {
        console.log('authenticated');

        localStorage.setItem('idToken', authResult.idToken);
        this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            alert("Error getting profile: " + error);
            return;
          }

          localStorage.setItem('profile', JSON.stringify(profile));

          console.log(JSON.stringify(profile));
          this.user.screenName = profile.screenName;
          this.user.picture = profile.picture;
          this.authenticated = true;
        });
      });

      this.lock.on('authorization_error', (error) => {
        alert("Authorization failed: " + error)
        return
      });
    },
    methods: {
      login() {
        this.lock.show();
      },

      logout() {
        localStorage.removeItem('idToken');
        localStorage.removeItem('profile');

        this.user.screenName = "";
        this.user.picture = "";
        this.authenticated = false;
      },
      checkAuth() {
        return !!localStorage.getItem('idToken');
      }
    }
  }
</script>
