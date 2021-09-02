<template>
  <el-dialog
    title="登陆"
    custom-class="blogs-login-in"
    v-model="dialogVisible"
    :append-to-body="true"
    width="30%"
  >
    <el-form ref="elform" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名称" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="keywords">
        <el-input type="password" v-model="form.keywords"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ref, defineComponent, computed, getCurrentInstance } from "vue";
export default defineComponent({
  emits: ["close"],
  props: {
    visible: Boolean
  },
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const form = ref({
      username: "",
      keywords: ""
    });
    const dialogVisible = computed({
      get: () => {
        return props.visible;
      },
      set: () => {
        emit("close");
      }
    });
    // 初始化校验规则
    const rules = ref({
      username: [
        { required: true, message: "请输入用户名称", trigger: "blur" }
      ],
      keywords: [{ required: true, message: "请输入用户密码", trigger: "blur" }]
    });
    const elform = ref();
    const submitForm = () => {
      elform.value.validate(valid => {
        if (valid) {
          proxy.$message({
            message: "校验通过",
            type: "success"
          });
          window.location.reload();
        }
      });
    };
    return {
      elform,
      form,
      rules,
      dialogVisible,
      submitForm
    };
  }
});
</script>
