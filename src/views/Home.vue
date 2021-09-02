<template>
  <div class="home">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="作者">
        <el-input
          v-model="formInline.author"
          placeholder="作者模糊查询"
        ></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input
          v-model="formInline.title"
          placeholder="标题模糊查询"
        ></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="formInline.timeRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-button type="primary">搜索</el-button>
    </el-form>
    <el-table :data="dataList">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="" label="操作">
        <template #default="scope">
          <el-button @click="delLine(scope.$index)">删除</el-button>
          <el-button @click="detail(scope.row)">详情</el-button>
          <el-button @click="editBlog(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
// import { setCookie } from "@common";
import { getList } from "api";
import { getCurrentInstance, ref, onMounted } from "vue";
import http from "@/utils/http";
import { useRouter } from "vue-router";
let dataList = ref([
  {
    title: "标题",
    author: "作者",
    createTime: "2015-08-02",
    id: "0"
  },
  {
    title: "标题1",
    author: "作者1",
    createTime: "2015-08-02",
    id: "1"
  },
  {
    title: "标题2",
    author: "作者2",
    createTime: "2015-08-02",
    id: "2"
  },
  {
    title: "标题3",
    author: "作者3",
    createTime: "2015-08-02",
    id: "3"
  }
]);
const { proxy } = getCurrentInstance();
const delLine = index => {
  // ctx.common.setCookie('abc', 'asdf', 1)
  dataList.value.splice(index, 1);
  proxy.$message({
    message: `删除成功`,
    type: "success"
  });
};
const router = useRouter();
const detail = ({ id }) => {
  router.push({
    name: "Detail",
    query: {
      id
    }
  });
};
const editBlog = ({ id }) => {
  router.push({
    name: "AddBlog",
    query: {
      id
    }
  });
};
onMounted(async () => {
  try {
    const res = await http.get(getList);
    if (res.data.code === 200) {
      dataList.value = res.data;
    }
  } catch (e) {
    return;
  }
});
let formInline = ref({
  author: "",
  title: "",
  timeRange: []
});
</script>
<style lang="stylus" scoped>
.home
  .el-form--inline
    text-align left
</style>
