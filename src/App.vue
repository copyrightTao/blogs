<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <NavMenu />
      <router-view class="router-view"/>
    </el-config-provider>
  </div>
</template>

<script setup>
import { ElConfigProvider } from "element-plus";
import NavMenu from '@components/NavMenu'
import zhCn from "element-plus/lib/locale/lang/zh-cn";
  const locale = zhCn
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(244, 245, 248);
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100vh;
}
#app .router-view {
  border-radius: 24px;
  background-color: #fff;
  padding: 20px;
  width: calc(100% - 140px);
  margin: 20px;
}
</style>
