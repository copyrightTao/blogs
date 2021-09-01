import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/common.css";
import { registerElementPlus } from "./registerElementPlus";

const app = createApp(App);
// 注册element plus
registerElementPlus(app);
app.config.devtools = true;
app
  .use(router)
  .use(store)
  .mount("#app");
