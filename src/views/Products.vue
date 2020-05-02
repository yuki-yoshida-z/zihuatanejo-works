<template>
  <div class="products">
    <page-heading heading-en="FAVORITE PRODUCTS" heading-ja="お気に入りプロダクト" />
    <div class="products-content">
      <ul class="products__list">
        <v-card tag="li" class="products__list-item" v-for="product of products" :key="product.id" max-width="320px" :hover=true :href="product.url" target="blank">
          <v-img :alt="product.name" class="white--text align-end products__list-img" max-width="320px" height="168px" :src="product.image_path" contain />
          <v-card-title class="products__list-title">{{ product.name }}</v-card-title>
          <v-card-subtitle class="pb-0">{{ product.company }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ product.description }}</div>
          </v-card-text>
        </v-card>
      </ul>
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
  }
}
</script>

<style lang="sass" scoped>

.products
  padding-bottom: 120px

  &__list
    display: flex
    flex-wrap: wrap

  &__list-item
    list-style: none
    margin: 40px 40px 0 0

  &__list-img
    border-bottom: 1px solid #eee
    box-sizing: content-box

  &__list-title
    align-items: flex-start
    height: 128px
    overflow: hidden

</style>
