<template>
  <div class="container-fluid fill-height">
    <div class="row fill-height justify-content-md-center">
      <div class="col col-md-8 align-self-center">
        <div class="card">
          <h4 class="card-header">New Post</h4>
          <div class="card-body">
            <form @submit.prevent="post">
              <div class="form-group">
                <label for="title">Image</label>
                <input type="file" class="form-control-file" name="image" id="image">
              </div>
              <div class="form-group">
                <label for="content">Captions</label>
                <textarea class="form-control" id="caption" placeholder="caption"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'posting'
    ]),
    post () {
      let formData = new FormData();

      formData.append('image', document.querySelector('#image').files[0])
      formData.append('caption', document.querySelector('#caption').value)

      this.posting(formData)
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
