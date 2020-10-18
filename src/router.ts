/*
 * @Author: Haopei Xie
 * @Date: 2020-10-03 15:36:47
 * @LastEditTime: 2020-10-18 17:42:01
 * @LastEditors: Haopei Xie
 * @Description:
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\router.ts
 * @
 */
import { h } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import markdown from "./components/markdown.vue";

const history = createWebHistory();
const renderMarkdown = (filename) => {
  return h(markdown, { path: `../markdown/${filename}.md`, key: filename });
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
          path: "introduce",
          component: renderMarkdown("introduce"),
        },
        {
          path: "start",
          component: renderMarkdown("start"),
        },
        {
          path: "install",
          component: renderMarkdown("install"),
        },
        {
          path: "switch",
          component: () => import("./components/switchPage.vue"),
        },
        {
          path: "button",
          component: () => import("./components/buttonPage.vue"),
        },
        {
          path: "dialog",
          component: () => import("./components/dialogPage.vue"),
        },
        { path: "tabs", component: () => import("./components/tabsPage.vue") },
      ],
    },
  ],
});

export default router;
