<script setup lang="ts">
import HeaderLogo from "../../../components/Header/cpn/HeaderLogo.vue";
import HeaderInput from "../../../components/Header/cpn/HeaderInput.vue";
</script>

<template>
  <div class="bgc">
    <div class="container">
      <div class="title">
        <HeaderLogo size="big" />
      </div>
      <div class="search">
        <HeaderInput size="big" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.bgc {
  background-color: #17181a;
}
.container {
  margin: 0 auto;
  width: 1332px;
  padding: 100px 0;
  .title {
    width: 15%;
    margin: 0 auto 50px;
  }
  .search {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
