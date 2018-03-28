import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const $db = Axios.create({
  baseURL: 'http://localhost:3000'
})

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: {},
    posts: [],
    likes: []
  },
  getters: {
    getByUser (state) {
      // return state.posts.filter(post => post.user._id == state.user.id)
    }
  },
  mutations: {
    auth (state, value) {
      state.isLoggedIn = value
    },
    setUser (state, user) {
      state.user = user
    },
    setPosts (state, posts) {
      state.posts = posts
    },
    setLikes (state, likes) {
      state.likes = likes
    }
  },
  actions: {
    register (context, value) {
      $db.post('/register', {
        name: value.name,
        username: value.username,
        password: value.password
      }).then(({data}) => {
        localStorage.token = data.token
        context.dispatch('getUser')
      }).catch(err => {
        alert(err)
      })
    },
    signin (context, value) {
      $db.post('/signin', {
        username: value.username,
        password: value.password
      }).then(({data}) => {
        localStorage.token = data.token
        context.dispatch('getUser')
      }).catch(err => {
        alert(err)
      })
    },
    getUser (context) {
      $db.get('/me', {
        headers: {
          token: localStorage.token
        }
      }).then(({data}) => {
        context.commit('auth', true)
        context.commit('setUser', data)
        context.dispatch('getPosts')
      }).catch(err => {
        alert(err)
      })
    },
    signout (context) {
      context.commit('setUser', {})
      context.commit('auth', false)
      delete localStorage.token
    },
    getPosts (context) {
      $db.get('/post')
        .then(({data}) => {
          context.commit('setPosts', data.posts)
        })
        .catch(err => {
          alert(err)
        })
    },
    posting (context, value) {
      $db.post('/post', value, {
        headers: {
          token: localStorage.token
        }
      }).then(({data}) => {
        context.commit('setPosts', data.posts)
        context.dispatch('getPosts')
      }).catch(err => {
        alert(err)
      })
    }
  }
})
