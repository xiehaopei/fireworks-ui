/*
 * @Author: Haopei Xie
 * @Date: 2020-10-18 16:47:02
 * @LastEditTime: 2020-10-18 16:49:47
 * @LastEditors: Haopei Xie
 * @Description:
 * @FilePath: \Pibukae:\vue\fireworks-ui\plugins\md.ts
 * @
 */
// @ts-nocheck
import path from "path";
import fs from "fs";
import marked from "marked";

const mdToJs = (str) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export function md() {
  return {
    configureServer: [
      // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => {
          // koa
          if (ctx.path.endsWith(".md")) {
            ctx.type = "js";
            const filePath = path.join(process.cwd(), ctx.path);
            ctx.body = mdToJs(fs.readFileSync(filePath).toString());
          } else {
            await next();
          }
        });
      },
    ],
    transforms: [
      {
        // 用于 rollup // 插件
        test: (context) => context.path.endsWith(".md"),
        transform: ({ code }) => mdToJs(code),
      },
    ],
  };
}
