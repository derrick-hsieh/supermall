<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{active: index === currentIndex}"
      @click= "itemClick(index)" :key="item.id"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods:{
      itemClick(index){
          this.currentIndex = index;
          this.$emit('tabClick', index);

      }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active {
  color: #8224E7;
  border-bottom:3px solid  #8224E7;
}
</style>
