<template>
  <div>
    <div id="shop-item">
      <div class="item-selector"></div>
      <div class="item-img">
        <img :src="product.productImg" alt />
      </div>
      <div class="item-info">
        <div class="item-title">
          <h3>{{product.title}}</h3>
        </div>
        <div class="info-bottom">
          <div class="item-price">
            <h3>${{product.price}}</h3>
          </div>
        </div>
        <div class="shop-wrap">
          <div class="shop-count">
            <button @click="decrease">-</button>
          <div class="item-count">{{product.count}}</div>
          <button @click="increase">+</button>
          </div>
          
          <button class="delete-btn" @click="handledelete(product)">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartListItem",
  components: {},

  props: ['product', 'index'],
  computed: {
    ...mapGetters(["cartList"])
  },
  methods: {
    increase() {
      this.product.count++;
    },
    decrease() {
      if (this.product.count > 1) {
        this.product.count--;
      }
    },
    handledelete: function(product) {
      this.cartList.splice(this.cartList.indexOf(product), 1);
      // return this.product.count = 0
    }
  }
};
</script>

<style>
#shop-item {
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
}
.item-title {
  font-weight: 900;
}
.item-img img {
  height: 120px;
  padding: 0;
  margin: 0 10px;
}
.item-info {
      padding: 0 27px 0 10px;
      width: 100%;
}
.item-selector {
  padding: 0 5px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-btn {
  width: 22px;
  height: 22px;
  border: 2px solid #a8a8a8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-wrap {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
}
.shop-count {
  display: flex;;
  width: 50%;
  align-items: center;
}
.shop-count button {
  height: 30px;
  width: 30px;
}
.delete-btn{
  color: red;
  padding: 10px;
  
}
.item-count {
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0 10px;
}
</style>
