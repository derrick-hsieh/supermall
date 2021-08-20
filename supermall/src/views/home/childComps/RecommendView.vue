<template>
 <div class="recommend">
     <div v-for="item in recommend " class="recommend-item">
         <a :href="item.link">
             <img :src="item.image" alt="">
             <div>{{item.title}}</div>
         </a>
     </div>
 </div>
</template>

<script>


export default {
  name: "RecommendView",
  props:{
      recommend:{
          type: Array,
          default(){ 
              return []
          }
      }
  },
  components: {
   
  },
  
}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0;
    border-bottom: 8px solid rgb(235, 235, 235);
    
}
.recommend-item{
    flex: 1;  
}
.recommend-item a{
    text-decoration: none;
    color: #000000;
}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom:10px;
}
</style>
