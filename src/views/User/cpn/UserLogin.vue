<script setup lang="ts"></script>

<template>
  <div>
    <h2>用户登录</h2>
    <p><input type="text" placeholder="账号" /></p>
    <p><input type="password" placeholder="密码" /></p>
    <span>登录</span>
  </div>
</template>

<style scoped lang="less">
h2 {
  margin-bottom: 30px;
  color: greenyellow;
}
p {
  height: 36px;
  margin-bottom: 15px;
  display: flex;
  padding: 10px 0;
  input {
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;
    color: aliceblue;
    font-size: 18px;
  }
}
span {
  display: block;
  padding: 10px 0;
  width: 80%;
  margin: 20px auto 30px;
  height: 36px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  letter-spacing: 10px;
  color: white;
  background-color: orange;
}
</style>
