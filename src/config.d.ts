/*
 * @Author: Haopei Xie
 * @Date: 2020-10-03 15:30:54
 * @LastEditTime: 2020-10-23 15:59:10
 * @LastEditors: Haopei Xie
 * @Description:
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\config.d.ts
 * @
 */
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

declare module "*.md" {
  const str: String;
  export default str;
}
