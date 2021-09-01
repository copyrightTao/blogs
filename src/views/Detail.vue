<template>
  <div id="blogs-detail">
    <div class="title">
      详情
    </div>
    <div>
      {{ id }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(null);
id.value = route.query.id;
</script>
