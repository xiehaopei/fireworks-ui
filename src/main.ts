/*
 * @Author: Haopei Xie
 * @Date: 2020-10-02 23:27:28
 * @LastEditTime: 2020-10-18 17:26:30
 * @LastEditors: Haopei Xie
 * @Description:
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\main.ts
 * @
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import "./lib/fireworks.scss";
import router from "./router";
import "github-markdown-css";
import markdown from "./components/markdown.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("markdown", markdown);
