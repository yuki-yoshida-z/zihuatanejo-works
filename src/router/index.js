import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Spec from '../views/Spec.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/spec',
    name: 'spec',
    component: Spec
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
