/*
 * @Author: Haopei Xie
 * @Date: 2020-10-03 15:36:47
 * @LastEditTime: 2020-10-23 15:52:05
 * @LastEditors: Haopei Xie
 * @Description:
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\router.ts
 * @
 */
import { h } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import markdown from "./components/markdown.vue";

import introduce from "./markdown/introduce.md";
import start from "./markdown/start.md";
import install from "./markdown/install.md";

const history = createWebHistory();
const renderMarkdown = (String) => {
  return h(markdown, { content: String, key: String });
};
const router = createRouter({
  history: history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: () => import("./views/Home.vue") },
    {
      path: "/doc",
      component: () => import("./views/Doc.vue"),
      children: [
        {
          path: "/doc",
          redirect: "/doc/introduce",
        },
        {
          path: "introduce",
          component: renderMarkdown(introduce),
        },
        {
          path: "start",
          component: renderMarkdown(start),
        },
        {
          path: "install",
          component: renderMarkdown(install),
        },
        {
          path: "switch",
          component: () => import("./components/SwitchPage.vue"),
        },
        {
          path: "button",
          component: () => import("./components/ButtonPage.vue"),
        },
        {
          path: "dialog",
          component: () => import("./components/DialogPage.vue"),
        },
        { path: "tabs", component: () => import("./components/TabsPage.vue") },
      ],
    },
  ],
});

export default router;
