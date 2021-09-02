<template>
  <div id="add-blog">
    <h3>{{ id ? "编辑博客" : "新增博客" }}</h3>
    <el-form ref="elform" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input
          type="textarea"
          v-model="form.content"
          placeholder="请输入内容"
          :autosize="{ minRows: 20, maxRows: 40 }"
          maxlength="500"
          show-word-limit
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm">确 定</el-button>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { proxy } = getCurrentInstance();
const form = ref({
  title: "",
  content: ""
});
const elform = ref();
const id = route.query.id;
const rules = ref({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  content: [{ required: true, message: "请输入内容", trigger: "blur" }]
});
const submitForm = () => {
  elform.value.validate(valid => {
    if (valid) {
      proxy.$message({
        message: "校验通过",
        type: "success"
      });
    }
  });
};
</script>
