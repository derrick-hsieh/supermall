<template>
  <div id="app">
    
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#8224E7">
        <img slot="item-icon" src="@/assets/img/tabbar/home-solid (1).svg" alt />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home-solid-color.svg" alt />
        <div slot="item-text" class="item-text">首頁</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#8224E7">
        <img slot="item-icon" src="@/assets/img/tabbar/microsoft-brands.svg" alt />
         <img slot="item-icon-active" src="@/assets/img/tabbar/microsoft-brands-color.svg" alt />
        <div slot="item-text" class="item-text">分類</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#8224E7">
        <img slot="item-icon" src="@/assets/img/tabbar/shopping-cart-solid.svg" alt />
         <img slot="item-icon-active" src="@/assets/img/tabbar/shopping-cart-solid-color.svg" alt />
        <div slot="item-text" class="item-text">購物車</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#8224E7">
        <img slot="item-icon" src="@/assets/img/tabbar/user-alt-solid.svg" alt />
         <img slot="item-icon-active" src="@/assets/img/tabbar/user-alt-solid-color.svg" alt />
        <div slot="item-text" class="item-text">會員</div>
      </tab-bar-item>
    </tab-bar>
    
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>

</style>
