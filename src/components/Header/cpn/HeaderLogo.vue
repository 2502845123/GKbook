<script setup lang="ts">
import { SMALL_HEADER_LOGO } from "../../../constant";
import useMap from "../../../hooks/useMap";

interface Props {
  size?: "small" | "big";
}
const props = withDefaults(defineProps<Props>(), {
  size: "small",
});

// 获取组件配置
const [getInfo] = useMap(SMALL_HEADER_LOGO);
const { textSize, imgSize } = getInfo(props.size);

// 跳转到首页
function goHome(): void {
  console.log("我将去往首页");
}
</script>

<template>
  <div class="logo" @click="goHome">
    <img src="../../../assets/logo.png" alt="" srcset="" />
    <h4>佛山读书</h4>
  </div>
</template>

<style scoped lang="less">
.logo {
  color: white;
  display: flex;
  align-items: center;

  img {
    width: v-bind(imgSize);
    height: v-bind(imgSize);
    margin-right: 10px;
  }

  h4 {
    font-weight: 400;
    letter-spacing: 1px;
    font-size: v-bind(textSize);
  }
}
</style>
