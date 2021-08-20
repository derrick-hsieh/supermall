<template>
  
  <div class="card">
         <img :src="item.imgUrl" alt="">
    <h3>{{item.name}}</h3>
    <h5 class="price">${{item.price}}</h5>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "CategoryListItem",
  components: {

  },
    props: {
    item: {
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
.card{
    background: red;
    margin-top: 20px;
    width: 45%;
}
.card img{
    width: 100%;
}


</style>
