<template>
<div id="detail">
    
    <detail-navbar/>
    {{item}}
     <!-- <h3 :item="item">{{item.name}}</h3> -->
    <!-- <div class="card" @click="$emit('view-item', item)"> -->
</div>
</template>

<script>

import DetailNavbar from'./childComp/DetailNavbar'
import products from '@/network/products'
export default {
  name: "Detail",
  components:{
      DetailNavbar,
      
  },
  
 props:['item'],
 
  data(){
      return {
       
          // products:null,
      }
  },
  methods:{
    // itemClick(){
    //   this.item= item
    // }
    // viewItem(){
    //   console.log(item)
    // }
  },
  // created(){
  //     this.item = item
  //     console.log(item)
      
  // }
 
}
</script>

<style>


</style>
