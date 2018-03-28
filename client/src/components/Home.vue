<template>
  <div class="container pt-5">
    <div class="row pt-4">
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getPosts'
    ])
  },
  created () {
    this.getPosts()
  }
}
</script>

<style>

</style>
