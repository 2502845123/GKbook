<script setup lang="ts"></script>

<template>
  <ul>
    <li>首页</li>
    <li>传书到手机</li>
    <li>墨水屏版</li>
    <li>手机版</li>
    <li>登录</li>
  </ul>
</template>

<style scoped lang="less">
ul {
  display: flex;
  align-items: center;
  li {
    color: #fff;
    opacity: 0.7;
    transition: all 0.2s;
    font-size: 16px;
    padding: 0 15px;
    border-right: 1px #fff solid;
    &:hover {
      opacity: 1;
    }
    &:last-child {
      border-right: none;
    }
  }
}
</style>
