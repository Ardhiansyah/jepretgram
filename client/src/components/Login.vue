<template>
  <div class="card">
    <h4 class="card-header">Login</h4>
    <div class="card-body">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Username" v-model="username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    ...mapActions([
      'signin'
    ]),
    login () {
      this.signin({
        username: this.username,
        password: this.password
      })
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
