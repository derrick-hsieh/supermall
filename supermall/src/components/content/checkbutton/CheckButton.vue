<template>
  <div class="check-btn" :class="{check:isChecked}" >
    <img src="@/assets/imgs/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  //   data() {
  //     return {
  //       isChecked: {
  //         type: Boolean,
  //         default: true
  //       }
  //     };
  //   },
  props: {
      
          isChecked: {
      type: Boolean,
      default: false
    
      },
      product:{
          type:Object,
          default(){
              return{

              }
          }
      }
    
  },
};
</script>

<style>
.check-btn {
  width: 22px;
  height: 22px;
  border: 2px solid #a8a8a8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check {
  border-color: red;
  background: red;
}
</style>
