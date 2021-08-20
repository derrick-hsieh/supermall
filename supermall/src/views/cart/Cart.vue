<template>
  
  <div class="cart">
  <nav-bar class="nav-bar">
    <div class="purple" slot="center">購物車({{length}})</div>
  </nav-bar>
  <cart-list></cart-list>
  <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from'@/components/common/navbar/NavBar'
import CartBottomBar from'./CartBottomBar'
import CartList from'./CartList'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    // cartLength(){
    //   return this.$store.state.cartlist.length
    // }
    ...mapGetters({
      length:'cartLength',
      list:'cartList'

    })
  }
};
</script>

<style>
.cart{
  height: 100vh;
}
.center, .left, .right{
  background: rgb(130, 36, 231);
  color: #ffffff;
}



</style>
