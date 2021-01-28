<template>
  <div class="home">
    <el-form :inline="true"
             :model="formInline"
             class="demo-form-inline">
      <el-form-item label="作者">
        <el-input v-model="formInline.author"
                  placeholder="作者模糊查询"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="formInline.title"
                  placeholder="标题模糊查询"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker v-model="formInline.timeRange"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <el-table :data="dataList">
      <el-table-column prop="title"
                       label="标题"></el-table-column>
      <el-table-column prop="author"
                       label="作者"></el-table-column>
      <el-table-column prop="createTime"
                       label="创建时间"></el-table-column>
      <el-table-column prop=""
                       label="操作">
        <template #default="scope">
          <el-button @click="delLine(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getCurrentInstance, ref, onMounted } from "vue";
export default {
  name: "Home",
  setup () {
    let dataList = ref([]);
    const { ctx } = getCurrentInstance();
    const delLine = index => {
      // ctx.common.setCookie('abc', 'asdf', 1)
      dataList.value.splice(index, 1);
      ctx.$message({
        message: `删除成功`,
        type: "success"
      });
    };
    onMounted(async () => {
      const res = await ctx.$http.get(ctx.api.getList);
      dataList.value = res.data;
    });
    let formInline = ref({
      author: '',
      title: '',
      timeRange: [],
    })
    return {
      dataList,
      delLine,
      formInline
    };
  }
};
</script>
<style lang="stylus" scoped>
.home
  .el-form--inline
    text-align left
</style>