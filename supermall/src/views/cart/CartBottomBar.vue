<template>
  <div class="bottom-bar">
      
      <div class="check-content">
          總額:{{totalPrice}}
      </div>
  </div>
 
</template>

<script>
export default {
  name: "CartBottomBar",
  components: {
  
  },
  computed:{
      totalPrice(){
          return'$' + this.$store.state.cartList.filter(item=>{
              return item
          }).reduce ((preValue, item)=>{
              return preValue + item.price*item.count
          }, 0)
      }


   
  }
};
</script>

<style>
.bottom-bar{
    height: 70px;
    background: rgb(212, 212, 212);
    position: relative;
    bottom:70px;
     display: flex;
    align-items: center;
    
}
.check-content{
    padding-left:10px;
}


</style>
