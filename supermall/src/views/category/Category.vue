<template>
  <div class="wrap">
    <div class="category-pic">
      <div class="cover">
        <h2>全部商品</h2>
      </div>
      <img
        src="https://images.pexels.com/photos/4937224/pexels-photo-4937224.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt
      />
    </div>
    <div class="sidebar" v-show="isShow">
      <div class="sidebar-header">
        <h3>篩選條件</h3>
        <button class="close-btn" @click="noShow()">x</button>
      </div>
      <div class="check-wrap">
        <h3>關鍵字:</h3>
        <br />
        <input type="text" v-model="keyword" />
      </div>
      <div class="check-wrap">
        <h3>顏色:</h3>
        <br />
        <span>紅色</span>
        <input type="checkbox" class="selected" v-model="colors" value="red" />

        <span>黑色</span>
        <input type="checkbox" class="selected" v-model="colors" value="black" />
        <span>白色</span>
        <input type="checkbox" class="selected" v-model="colors" value="white" />
      </div>
      <div class="check-wrap">
        <h3>尺寸:</h3>
        <br />
        <div>
          <span>S</span>
          <input type="checkbox" class="selected" v-model="sizes" value="S" />
          <span>M</span>
          <input type="checkbox" class="selected" v-model="sizes" value="M" />
          <span>L</span>
          <input type="checkbox" class="selected" v-model="sizes" value="L" />
          <span>XL</span>
          <input type="checkbox" class="selected" v-model="sizes" value="XL" />
        </div>
      </div>
      <div class="check-wrap">
        <h3>類型:</h3>
        <br />
        <span>上衣</span>
        <input type="checkbox" class="selected" v-model="types" value="T-shirt" />
        <span>外套</span>
        <input type="checkbox" class="selected" v-model="types" value="Jacket" />
      </div>
      <!-- <div class="check-wrap">
        <h3>Sort By:</h3>
        <br />
        <select v-model="sortBy">
          <option value="name">Product Name</option>
          <option value="color">Color</option>
          <option value="size">Size</option>
        </select>
      </div> -->
    </div>
  <div class="filter-wrap">
    <button class="filter" @click="show()">篩選條件</button>
    <caption>總共 {{computedProducts.length}} 件商品</caption>
    </div>
    <div class="container">
      <div class="card"
        v-for="(product, index) in computedProducts"
        :product="product"
        :key="index"
        @click="viewItem(product)"
      >
        <!-- card-------- -->
          <img :src="product.imgUrl" alt />
          <h3>{{product.name}}</h3>
          <h3 class="price">${{product.price}}</h3>
        
      </div>
    </div>
    <category-descrip
      :product="product"
      :active="active.itemDescrip"
      v-on:close-product="closeProduct"
    />
  </div>
</template>

<script>
import products from "@/network/products";

import CategoryDescrip from "./CategoryDescrip";
// import CategoryList from "./CategoryList";

export default {
  name: "Category",
  components: {
    CategoryDescrip
    // CategoryList
  },
  data() {
    return {
      products: products,
      product: null,
      item: null,
      colors: [],
      types: [],
      sizes: [],
      sortBy: "name",
      keyword: "",
      isShow: false,
      active: {
        itemDescrip: false
      },
    };
  },
  methods: {
    show() {
      this.isShow = true;
      // console.log(isActive);
    },
     noShow() {
      this.isShow = false;
      // console.log(isActive);
    },

    viewItem(product) {
      this.product = product;
      // this.$router.push('/detail')
      console.log(this.product);
      this.active.itemDescrip = true;
    },
    closeProduct() {
      this.active.itemDescrip = false;
    }
  },
  computed: {
    computedProducts: function() {
      return this.products
        .filter(item => {
          return (
            (this.keyword.length === 0 || item.name.includes(this.keyword)) &&
            (this.colors.length === 0 || this.colors.includes(item.color)) &&
            (this.types.length === 0 || this.types.includes(item.type)) &&
            (this.sizes.length === 0 || this.sizes.includes(item.size))
          );
        })
        .sort((a, b) => {
          return a[this.sortBy]
            .toString()
            .localeCompare(b[this.sortBy].toString());
        });
    }
  }
};
</script>

<style>
.wrap {
  width: 100vw;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 13px 13px 60px 13px;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  transition: 0.5s;
  transform: translate(0%);
}
.active {
  transform: translate(-100%);
}
.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: purple;
  padding: 1rem;
  color: #ffffff;
  position: relative;
}
.close-btn {
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 3%;
  background: none;
  color: #ffffff;
  top: 5%;
}
h3 {
  margin: 0;
}
.check-wrap {
  padding: 1rem;
}
.selected {
  margin: 5px;
  width: 15px;
  height: 15px;
}
.show-sidebar {
  transform: translate(0);
}
span {
  font-size: 1.2rem;
}
.filter-wrap{
  margin-top: 13px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.filter{
  width: 70%;
  padding: 5px 0;
  margin-bottom: 13px;
  background: #000000;
  color: #ffffff;
  font-weight: 700;
}
caption{
  width: 70%;
}
.card{
  width: 45%;
  margin-top: 20px;
}
.card img {
  width: 100%;
}
.category-pic {
  height: 200px;
  width: 100vw;
  overflow: hidden;
  position: relative;
}
.category-pic img {
  width: 100%;
}
.cover {
  position: absolute;
  background: rgba(0, 0, 0, 0.384);
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
</style>
