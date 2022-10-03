<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../../../request/user";

const Router = useRouter();

const zhang = ref<string>("");
const psd = ref<string>("");
const psd2 = ref<string>("");
const nickName = ref<string>("");

const R1 = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
const R2 = /^[a-zA-Z][a-zA-Z0-9_]{4,10}$/;

function userRegister() {
  let bool1, bool2, bool3;
  if (R1.test(zhang.value)) {
    bool1 = true;
  } else {
    bool1 = false;
    zhang.value = "";
    alert("* 账号以字母开头,5-16位,允许字母数字下划线！");
  }

  if (R2.test(psd.value)) {
    bool2 = true;
  } else {
    bool2 = false;
    psd.value = "";
    alert("* 密码以字母开头,5-10位,允许字母数字下划线！");
  }

  if (psd.value == psd2.value) {
    bool3 = true;
  } else {
    bool3 = false;
    psd2.value = "";
    alert("* 两次输入密码不一样，请重新输入！");
  }

  if (bool1 && bool2 && bool3) {
    console.log("用户可以开始注册！");
    register(zhang.value, psd.value, nickName.value).then((res) => {
      zhang.value = "";
      psd.value = "";
      psd2.value = "";
      nickName.value = "";
      console.log(res);
      Router.push({ name: "login" });
    });
  }
}
</script>

<template>
  <div>
    <h2>用户注册</h2>
    <p><input type="text" placeholder="账号" v-model="zhang" /></p>
    <p><input type="password" placeholder="密码" v-model="psd" /></p>
    <p><input type="password" placeholder="确认密码" v-model="psd2" /></p>
    <p><input type="text" placeholder="昵称" v-model="nickName" /></p>
    <span @click="userRegister">注册</span>
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
