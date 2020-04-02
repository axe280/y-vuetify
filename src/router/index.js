import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Book from '../views/Book.vue'
import Words from '../views/Words.vue'
import Profile from '../views/Profile.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/book:id',
    name: 'book',
    props: true,
    component: Book
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function authGuard(from, to, next) {
  if (Store.getters['userModule/isUserAuthenticated']) {
    next()
  } else {
    next('/signin')
  }
}