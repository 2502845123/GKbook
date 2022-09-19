<script setup lang="ts">
import { ref, computed } from "vue";
import HeaderLi from "./cpn/HeaderLi.vue";
import HeaderLogo from "./cpn/HeaderLogo.vue";
import HeaderInput from "./cpn/HeaderInput.vue";

const position = ref("sticky");
const width = ref(1332);
const boxWidth = computed(() => {
  return width.value + "px";
});
</script>

<template>
  <div class="header">
    <div class="box">
      <HeaderLogo />
      <HeaderInput />
      <HeaderLi />
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  height: 72px;
  background-color: #17181a;
  position: v-bind(position);
  top: 0;
  color: white;
  .box {
    width: v-bind(boxWidth);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
