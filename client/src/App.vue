<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <router-link class="navbar-brand" :to="{name: 'Home'}">Jepretgram</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-if="isLoggedIn">
          <router-link class="nav-link" :to="{name: 'newPost'}">Post</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link class="nav-link" :to="{name: 'Register'}">Register</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link class="nav-link" :to="{name: 'Login'}">Login</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link class="nav-link" :to="{name: 'MyPost'}">{{ user.username }}</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a class="nav-link" @click="signout()" style="cursor: pointer;">Logout</a>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState([
      'isLoggedIn',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'signout'
    ]),
  },
  created () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
