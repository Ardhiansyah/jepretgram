<template>
  <div>
    <div class="card mb-3" v-for="(post, i) in latestPost" :key="i">
      <div class="card-body">
        <img :src="post.url" alt="" srcset="">
      </div>
      <div class="card-footer">
        <h5 class="text-muted">{{ post.caption }}</h5>
        <small class="text-muted">{{ new Date(post.updatedAt || post.createdAt).toLocaleString() }}</small>
        <small class="text-muted">
          <router-link
          v-if="isLoggedIn && post.user._id == user.id"
          :to="{name: 'EditPost', params: {id: post._id}}"
          >
            Edit
          </router-link>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLoggedIn',
      'user',
      'posts'
    ]),
    latestPost () {
      return this.posts.reverse()
    }
  }
}
</script>
