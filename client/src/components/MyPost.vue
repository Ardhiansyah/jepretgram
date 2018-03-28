<template>
  <div>
    <div class="card mb-3" v-for="(post, i) in latestPost" :key="i">
      <div class="card-body">
        <img :src="post.url" alt="" srcset="">
      </div>
      <div class="card-footer">
        <h5 class="text-muted">{{ post.caption }}</h5>
        <small class="text-muted">{{ new Date(post.updatedAt || post.createdAt).toLocaleString() }}</small>
      </div>
    </div>

    <h4 v-if="getByUser.length == 0">Not Found</h4>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  // computed: {
  //   ...mapGetters([
  //     'getByUser'
  //   ]),
  //   ...mapState([
  //     'isLoggedIn',
  //     'token'
  //   ]),
  //   latestPost () {
  //     return this.getByUser.reverse()
  //   }
  // },
  // created () {
  //   if (!this.isLoggedIn) {
  //     this.$router.push({name: 'Home'})
  //   }
  // },
  // watch: {
  //   isLoggedIn (status) {
  //     if (!status) {
  //       this.$router.push({name: 'Home'})
  //     }
  //   }
  // }
}
</script>
