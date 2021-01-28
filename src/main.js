import { createApp } from "vue";
import {
  ElButton,
  ElSelect,
  ElTable,
  ElTableColumn,
  ElMessage,
  ElForm,
  ElFormItem,
  ElInput,
  ElTimePicker,
  ElDatePicker
} from "element-plus";
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
import { Api } from 'api'
// 设置element语言
locale.use(lang)
import Common from "./utils/common";
import axios from "axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/common.css";
const app = createApp(App);
app.config.devtools = true;
app
  .use(router)
  .use(ElButton)
  .use(ElSelect)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElInput)
  .use(ElTimePicker)
  .use(ElDatePicker)
  .use(ElMessage)
  .use(store)
  .mount("#app");
app.config.globalProperties.$http = axios;
app.config.globalProperties.api = Api;
app.config.globalProperties.common = Common;
