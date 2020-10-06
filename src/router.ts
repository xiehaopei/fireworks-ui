/*
 * @Author: Haopei Xie
 * @Date: 2020-10-03 15:36:47
 * @LastEditTime: 2020-10-06 16:29:26
 * @LastEditors: Haopei Xie
 * @Description:
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\router.ts
 * @
 */
import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: () => import("./views/Home.vue") },
    { path: "/doc", component: () => import("./views/Doc.vue"), children: [
      {path:'switch',component:() => import("./components/switch.vue")},
      {path:'button',component:() => import("./components/button.vue")},
      {path:'dialog',component:() => import("./components/dialog.vue")},
      {path:'tabs',component:() => import("./components/tabs.vue")},
    ] },
  ],
});

export default router;
