<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">購物網</div>
    </nav-bar>
    <home-slideshow :banners="banners"></home-slideshow>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <!-- <tab-control :titles="['流行','新款','熱銷']" class="tab-control" @tabClick="tabClick"></tab-control> -->
    <div ref="scroll"  class="products-container">      
      <products-card  v-for=" (good, item) in products" :good="good" :item="item" :key="good.id"
      v-on:view-item="viewItem($event)">
      </products-card>
       <!-- <products-card  v-for=" item in products" :item="item"  :key="item.id"></products-card>
    </div> -->
    
  </div>
  <product-descrip 
    :item="item"
    :active="active.itemDescrip"
    v-on:close-product="closeProduct" />  
    <back-top @click.native="backClick"/>
   </div>
  

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSlideshow from "@/views/home/childComps/HomeSlideshow";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
// import TabControl from "@/components/content/TabControl/TabControl";
import ProductDescrip from "@/components/content/goods/ProductDescrip";
import BackTop from "@/components/content/backtop/BackTop";
import ProductsCard from "@/components/content/goods/ProductsCard";
import products from "@/network/products";

import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSlideshow,
    RecommendView,
    FeatureView,
    ProductsCard,
    BackTop,
    ProductDescrip
    
  },
  data() {
    return {
      banners: [],
      recommend: [],
      products: products,
      currentType: 'pop',
      item: null,
      good:null,
      active:{
        itemDescrip:false
      }

    };
  },
  created() {
    //請求多個數據
    getHomeMultidata().then(res => {
      // if(res.success){
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  methods: {
    //事件監聽
    // tabClick(index) {
    //   switch (index) {
    //     case 0:
    //       this.currentType = 'pop';
    //       break;
    //     case 1:
    //       this.currentType = 'new';
    //       break;
    //     case 2:
    //       this.currentType = 'sell';
    //       break;
    //   }
     
    // },
    viewItem(item){
      this.item = item
      // this.$router.push('/detail')
      console.log(this.item)
      this.active.itemDescrip=true
    },
    closeProduct(){
      this.active.itemDescrip= false
    },
    backClick(){
      document.documentElement.scrollTop = 0;
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        //this.result =res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    }
   
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background: rgb(130, 36, 231);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 6;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
}
.products-container {
  display: flex;
  padding: 0 13px 60px 13px;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>