<template>
  <div id="nav-menu">
    <el-menu
      default-active="/home"
      :router="true"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <template #title>博客列表</template>
      </el-menu-item>
      <el-menu-item index="/add-blog">
        <i class="el-icon-menu"></i>
        <template #title>新增博客</template>
      </el-menu-item>
      <!-- <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <template #title>导航3</template>
      </el-menu-item> -->
    </el-menu>
    <Avatar />
  </div>
</template>
<script setup>
import Avatar from "./Avatar";
</script>
<style lang="stylus">
#nav-menu {
  width: 140px;
  background-color:rgb(244, 245, 248);
  margin-top: 20px;
  .el-menu {
  border-right: 0px
  }
}
#nav-menu .el-menu-vertical-demo {
  background-color:rgb(244, 245, 248);
}
</style>
