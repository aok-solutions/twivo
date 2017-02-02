<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Twivo Feed</h1>
    <button class="btn btn-primary" @click="login()">Log In</button>
  </div>
</template>

<script>
  import { lock } from '../index'

  export default {
    methods: {
      login() {
        lock.show((error, profile, accessToken) => {
          if(error){
            alert("Error authenticating")
            return
          }

          localStorage.setItem("accessToken", authResult.accessToken)
          localStorage.setItem("profile", JSON.stringify(profile))
        })
      },

      logout() {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("profile")
      }
    }
  }
</script>
