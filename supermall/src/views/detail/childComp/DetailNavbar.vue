<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/imgs/common/back.png" alt />
      </div>
      <div slot="center">詳情</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style>
.back img {
  width: 38px;
  height: 38px;
  margin-top: 5px;
}
</style>
