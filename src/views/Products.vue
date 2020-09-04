<template>
  <div class="products">
    <page-heading heading-en="FAVORITE PRODUCTS" heading-ja="お気に入りプロダクト" />
    <div class="products-content">
      <transition-group
        class="products__list nw-productsList"
        tag="ul"
        enter-active-class="animate__animated animate__fadeInUp"
        @before-enter="transitionBeforeEnter"
      >
        <v-card
          tag="li"
          v-for="(product, index) in products"
          :key="product.order"
          :data-index="index"
          :hover=true
          :href="product.url"
          class="products__list-item nw-productsListItem"
          target="blank"
          max-width="320px"
        >
          <v-img
            :alt="product.name"
            :src="product.image_path"
            class="white--text align-end products__list-img"
            height="168px"
            width="320px"
            max-width="320px"
            contain
          />
          <v-card-title class="products__list-title nw-productsListTitle">{{ product.name }}</v-card-title>
          <v-card-subtitle class="pb-0 nw-productsListCompany">{{ product.company }}</v-card-subtitle>
          <v-card-text class="text--primary nw-productsListText">
            <div>{{ product.description }}</div>
          </v-card-text>
        </v-card>
      </transition-group>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'products',

  components: {
    PageHeading
  },

  data(){
    return {
      products: null
    }
  },

  created(){
    firebase.firestore().collection('products').orderBy('order').get().then(snapshot => {
      this.products = snapshot.docs.map(doc => doc.data())
    })
  },

  methods: {
    transitionBeforeEnter(el) {
      el.style.animationDelay = Number(el.dataset.index) / 10 + 's'
    }
  }
}
</script>

<style lang="sass" scoped>

.products
  background-image: url("../assets/productsBg.svg")
  background-position: right
  background-size: contain
  background-attachment: fixed
  overflow: hidden
  min-height: 100vh

.products-content
  margin-top: 24px
  padding: 0 0 0 7%
  .isMobile &
    padding: 0 2rem

.products
  padding-bottom: 120px

  &__list
    display: flex
    flex-wrap: wrap
    padding: 0

  &__list-item
    list-style: none
    margin: 40px 40px 0 0
    .isMobile &
      margin: 3rem 1rem 0 0

  &__list-img
    border-bottom: 1px solid #eee
    box-sizing: content-box

  &__list-title
    align-items: flex-start
    height: 128px
    overflow: hidden

</style>
