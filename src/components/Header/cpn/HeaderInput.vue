<script setup lang="ts">
import { HEADER_INPUT } from "../../../constant";
import useMap from "../../../hooks/useMap";

interface Props {
  size?: "small" | "big";
}
const props = withDefaults(defineProps<Props>(), {
  size: "small",
});

// 获取组件配置
const [getInfo] = useMap(HEADER_INPUT);
const { leftIcon, rightInco, height, fontsize } = getInfo(props.size);
</script>

<template>
  <div class="input">
    <svg class="icon svg" aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
    <input placeholder="搜索" />
    <svg class="icon hc" aria-hidden="true">
      <use xlink:href="#icon-icon-"></use>
    </svg>
  </div>
</template>

<style scoped lang="less">
.input {
  margin: 0 50px;
  background-color: rgba(246, 246, 249, 0.1);
  height: v-bind(height);
  border-radius: 30px;
  padding: 0 25px;
  flex: 1;
  display: flex;
  align-items: center;
  color: #7c828c;
  input {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: v-bind(fontsize);
    color: white;
  }
  .svg {
    position: relative;
    left: -8px;
    font-size: v-bind(leftIcon);
  }
  .hc {
    margin-left: auto;
    font-size: v-bind(rightInco);
    margin-right: -8px;
  }
}
</style>
