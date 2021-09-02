import {
  ElButton,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElInput,
  ElForm,
  ElFormItem,
  ElIcon,
  ElDialog,
  ElCheckbox,
  ElPopover,
  ElSelect,
  ElOption,
  ElInputNumber,
  ElTag,
  ElPopper,
  ElScrollbar,
  ElPagination,
  ElMenu,
  ElMenuItem,
  ElAvatar
} from "element-plus";
// import 'element-plus/dist/index.css'
// import lang from "element-plus/lib/locale/lang/zh-cn";
// const locale = require("element-plus/lib/locale");
// import "dayjs/locale/zh-cn";
// import zhCn from "element-plus/lib/locale/lang/zh-cn";
// 汉化
// console.log(locale);
// console.log(lang);
// locale.use(lang);

const components = [
  ElButton,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElInput,
  ElForm,
  ElFormItem,
  ElIcon,
  ElDialog,
  ElCheckbox,
  ElPopover,
  ElSelect,
  ElOption,
  ElInputNumber,
  ElTag,
  ElPopper,
  ElScrollbar,
  ElPagination,
  ElMenu,
  ElMenuItem,
  ElAvatar
];
const plugins = [ElLoading, ElMessage, ElMessageBox];
const elementOption = {
  size: "mini"
};

export const registerElementPlus = app => {
  // element plus 按需加载时的全局配置
  app.config.globalProperties.$ELEMENT = elementOption;
  components.forEach(component => {
    app.use(component);
  });
  plugins.forEach(plugin => {
    app.use(plugin);
  });
};
