<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 16:29:38
 * @LastEditTime: 2020-10-21 00:07:28
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\ButtonPage.vue
 * @
-->
<template>
  <div>
    <h1>Button 组件示例</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template>

<script lang="ts">
import Button1Demo from "../demo/Button1.demo.vue";
import Button2Demo from "../demo/Button2.demo.vue";
import Button3Demo from "../demo/Button3.demo.vue";
import Button4Demo from "../demo/Button4.demo.vue";
import Button5Demo from "../demo/Button5.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>
