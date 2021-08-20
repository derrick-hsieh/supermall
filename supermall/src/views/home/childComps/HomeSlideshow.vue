<template>
  
    <slideshow>
      <slideshow-item v-for= "item in banners">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </slideshow-item>
    </slideshow>
 
</template>

<script>


import { Slideshow, SlideshowItem } from "@/components/common/slideshow";

export default {
  name: "HomeSlideshow",
  props:{
      banners:{
          type: Array,
          default(){ 
              return []
          }
      }
  },
  components: {
    Slideshow,
    SlideshowItem
  },
  
}
</script>

<style>

</style>
