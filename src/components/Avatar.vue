<template>
  <div id="blogs-avatar">
    <el-popover
      placement="top"
      trigger="hover"
      :width="80"
      v-model:visible="visible"
    >
      <el-button
        type="primary"
        size="mini"
        @click="
          visible = false;
          loginVisible = true;
        "
        >登陆</el-button
      >
      <template #reference>
        <el-avatar size="medium" :src="circleUrl"></el-avatar>
      </template>
    </el-popover>
    <LoginIn :visible="loginVisible" @close="loginVisible = false" />
  </div>
</template>
<script setup>
import LoginIn from "./LoginIn";
import circleUrl from "../assets/logo.png";
import { ref } from "vue";
const visible = ref(false);
const loginVisible = ref(false);
</script>
<style lang="stylus">
#blogs-avatar
  position fixed
  bottom 20px
  left 40px
.el-popover
  min-width 0!important
  text-align center!important
</style>
