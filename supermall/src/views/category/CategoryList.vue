<template>
  
   <div class="card">
         <img :src="product.imgUrl" alt="">
    <h3>{{product.name}}</h3>
    <h5 class="price">${{product.price}}</h5>
  </div>
</template>

<script>
// import CategoryListproduct from './CategoryListproduct'

export default {
  name: "CategoryList",
  components: {
    //   CategoryListproduct
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  computed:{


  }
};
</script>

<style>
.card {
    margin-top: 20px;
    width: 45%;
}


</style>
