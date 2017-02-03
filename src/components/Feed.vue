<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Twivo Feed</h1>
    <button class="btn btn-primary" @click="login()" v-show="!authenticated">Log In</button>
    <button class="btn btn-danger" @click="logout()" v-show="authenticated">Log Out</button>
  </div>
</template>

<script>
  import { lock } from '../index';

  export default {
    data() {
      return {
        authenticated: false,
        lock: lock
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
        this.authenticated = false;
      },
      checkAuth() {
        return !!localStorage.getItem('idToken');
      }
    }
  }
</script>
