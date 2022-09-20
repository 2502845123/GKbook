<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="box">
    <div class="container">
      <router-view />
      <p>
        <router-link to="login">登录</router-link>
        <router-link to="regiser">注册</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped lang="less">
.box {
  padding-top: 100px;
  height: 80vh;
  background: #1f2022;
  color: #eef0f4;
  .container {
    padding: 30px;
    margin: 0 auto;
    width: 30%;
    background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F25%2F20200425173132_svsej.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666262570&t=f62e77f13d7b88524bb787954ab527fb");
    border-radius: 15px;
    box-shadow: 0px 0px 15px 1px white;
    p {
      display: flex;
      justify-content: flex-end;
    }
    a {
      color: white;
      margin-left: 15px;
    }
    .router-link-active {
      color: skyblue;

      font-size: 16px;
    }
    .router-link-exact-active {
      color: skyblue;
    }
  }
}
</style>
