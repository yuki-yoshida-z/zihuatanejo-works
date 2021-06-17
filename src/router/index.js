import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Spec from '../views/Spec.vue'
import Products from '../views/Products.vue'
import Company from '../views/Company.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

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
    path: '/company',
    name: 'company',
    component: Company
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
