<template>
  <div class="container-fluid fill-height">
    <div class="row fill-height justify-content-md-center">
      <div class="col col-md-4 align-self-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLoggedIn'
    ])
  },
  created () {
    if (this.isLoggedIn) {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style media="screen">
  .fill-height {
    min-height: 100vh
  }
</style>
