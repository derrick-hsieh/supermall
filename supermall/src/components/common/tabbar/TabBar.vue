<template>
  <div id="app">
    <div id="tab-bar">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {}
};
</script>

<style>

#tab-bar{
  display: flex;
  background: #f5f5f5;
  box-shadow: 0px -3px 5px rgb(216, 216, 216);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
