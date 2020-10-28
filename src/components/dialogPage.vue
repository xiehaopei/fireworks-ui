<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 16:29:58
 * @LastEditTime: 2020-10-26 15:10:28
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\DialogPage.vue
 * @
-->
<template>
  <div>
    <h1>Dialog 组件示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
  </div>
</template>

<script lang="ts">
import Dialog1Demo from "../demo/Dialog1.demo.vue";
import Dialog2Demo from "../demo/Dialog2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>