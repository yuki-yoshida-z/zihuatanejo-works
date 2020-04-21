<template>
  <div class="products">
    <page-heading heading-en="FAVORITE PRODUCTS" heading-ja="お気に入りプロダクト" />
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'
import axios from "axios"

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
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.product = response))
  }
}
</script>
