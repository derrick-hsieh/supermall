<template>
  
  <div class="cart-list">
      <ul>
        <cart-list-item v-for="(item, index) in cartList" :key="index.id" :product="item"></cart-list-item>
      </ul>
  
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem'
import CartBottomBar from './CartBottomBar'
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed:{
    
    ...mapGetters(['cartList'])
  }
};
</script>

<style>
ul{
  padding: 0;
  
  
}
.cart-list{
  height: calc(100% - 44px - 60px);
}

</style>
