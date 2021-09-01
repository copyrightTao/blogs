<template>
  <div id="blogs-avatar">
    <el-avatar size="middle" :src="circleUrl"></el-avatar>
  </div>
</template>
<script setup>
import circleUrl from '../assets/logo.png'
</script>
<style lang="stylus">
#blogs-avatar
  position fixed
  bottom 20px
  left 40px
</style>