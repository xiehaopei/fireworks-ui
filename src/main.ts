/*
 * @Author: Haopei Xie
 * @Date: 2020-10-02 23:27:28
 * @LastEditTime: 2020-10-09 20:59:38
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\main.ts
 * @
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import "./lib/fireworks.scss"
import router from "./router";

createApp(App).use(router).mount("#app");