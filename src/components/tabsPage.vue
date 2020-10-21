<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 16:30:24
 * @LastEditTime: 2020-10-21 09:02:15
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\TabsPage.vue
 * @
-->
<template>
  <div>
    <h1>Tabs 组件示例</h1>
    <Demo :component="Tabs1Demo" />
  </div>
</template>

<script lang="ts">
import Tabs1Demo from "../demo/Tabs1.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
    };
  },
};
</script>