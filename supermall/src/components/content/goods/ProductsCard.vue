<template>
<div class="card" @click="$emit('view-item', good)" :good="good">
<!-- <div class="card" @click="itemClick" :key="item.id"> -->
    <img :src="good.imgUrl" alt="">
    <h3>{{good.name}}</h3>
    <h3 class="price">${{good.price}}</h3>
</div>
</template>

<script>


export default {
  name: "ProductsCard",
  props:['good'],
  
  computed:{
      description(){
          return this.description
      }
  },
//   methods:{
//       itemClick(){
//           console.log()
//           this.$router.push('/detail')
//       }
//   },
  components:{
      
}
}
</script>

<style>
.card{
    margin-top: 20px;
    width: 45%;
}
.card img{
    width: 100%;
}
h3{
    margin: 0;
}
.price{
    color: rgb(236, 121, 63);
    font-size: 1.5rem;
    margin: 0;
}

</style>
