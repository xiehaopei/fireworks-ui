/*
 * @Author: Haopei Xie
 * @Date: 2020-10-13 09:59:32
 * @LastEditTime: 2020-10-13 10:53:52
 * @LastEditors: Haopei Xie
 * @Description:
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\lib\openDialog.ts
 * @
 */

import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";

interface Options {
  title: String;
  content: any;
  ok?: Function;
  cancel?: Function;
}

export const openDialog = (options: Options) => {
  const { title, content, ...rest } = options;
  const div = document.createElement("div");
  const destroyElements = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (!newVisible) {
              //@ts-ignore
              destroyElements();
            }
          },
          ok: rest.ok,
          cancel: rest.cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
  document.body.appendChild(div);
};
