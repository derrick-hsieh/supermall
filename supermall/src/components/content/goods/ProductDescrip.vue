<template>
  <div class="descrip-bg" :class="{show:active}">
    <!-- <div class="drawer" :class="{show:active}"></div> -->
    <div class="drawer-close" @click="$emit('close-product')">X</div>

      <div v-if="item" class="item-details">
      <div class="coverfit">
        <img :src="item.imgUrl" alt />
      </div>

      <h3 class="text-center">{{item.name}}</h3>
      
      <h3 class="text-center price">${{item.price}}</h3>
      <div class="size">
          <img src="@/assets/img/tabbar/size-chart.png" alt="">
      </div>
      
      
      <div class="bottom-container">
        <div class="button-container">
          
          <button class="add" @click="addToCart()" >添加到購物車</button>
        </div>
      </div>
    </div>
    <toast :message="message" :show="show"/>
  </div>
</template>

<script>
import Toast from "@/components/common/toast/Toast"
export default {
  name: "ProductDescrip",
  props: ["item", "active"],
   components: {
     Toast
   },

  data(){
      return {
       show:false,
       message:'已加到購物車'
      }
  },
  computed: {
    // itemTotal() {
    //   return this.$store.getters.productQuantity(this.product)
    // }
  },
  methods: {
      addToCart(){
          
          const product ={}
          product.productImg =this.item.imgUrl
          product.title = this.item.name
          product.id = this.item.id
          product.price = this.item.price
          product.count = this.item.count
          //把商品加到購物車
        //   this.$store.commit('addCart', product)
          this.$store.dispatch('addCart', product)
          
            
            this.show=true;
            setTimeout(()=>{
              this.show = false;
            }, 1500)
          
      }
  },
 
};
</script>

<style>
.descrip-bg {
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
}
.drawer-close {
  position: fixed;
  top: 2%;
  left: 5%;
  padding: 5px;
  color: #ffffff;
  font-weight: 900;
  z-index: 11;
  font-size: 1.2rem;
  text-shadow: 0px 0px 8px rgb(59, 59, 59);
}
.coverfit {
  height: 65vh;
  width: 100vw;
  overflow: hidden;
}
.item-details img {
  width: 100%;
  
}
.bottom-container {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
}
.button-container{
    width: 100%;
}
.text-center{
    padding: 10px;
}
.price{
    color: rgb(236, 121, 63);
    font-size: 1.5rem;
}
.cart-total{
    font-size: 1.2rem;
    padding: 0 12px;
}
button{
    border: none;
}

.add{
    width: 100%;
    font-weight: 900;
    font-size: 1.2rem;
    background: rgb(130, 217, 99);
    color: #ffffff;
    padding: 10px 20px;

}
.show {
  display: block;
}
</style>
