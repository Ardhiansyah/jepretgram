import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/components/Auth'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AllPost from '@/components/AllPost'
import PostForm from '@/components/PostForm'
import MyPost from '@/components/MyPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Home',
          component: AllPost
        },
        {
          path: '/my/post',
          name: 'MyPost',
          component: MyPost
        }
      ]
    },
    {
      path: '/post',
      name: 'newPost',
      component: PostForm
    },
    {
      path: '/',
      component: Auth,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
